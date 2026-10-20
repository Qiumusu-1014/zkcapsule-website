import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(await fs.readFile(path.join(ROOT,'assets/data/quotation-models.json'),'utf8'));
const OUT=path.join(ROOT,'assets/files/quotes');
const PREVIEW=process.env.ZK_QUOTE_PREVIEW_DIR;
const NAVY='#1F3B64',GOLD='#C7A25A',PALE='#F1F4F8',INPUT='#FFF3D6';
const put=(s,a,v)=>{s.getRange(a).values=[[v]];};
const formula=(s,a,v)=>{s.getRange(a).formulas=[[v]];};
function band(s,a,label){s.getRange(a).merge();put(s,a.split(':')[0],label);s.getRange(a).format={fill:NAVY,font:{name:'Microsoft YaHei',size:10,bold:true,color:'#FFFFFF'},rowHeight:28,verticalAlignment:'center'};}
function style(s,last){
 s.showGridLines=false;s.getRange(`A1:H${last}`).format={font:{name:'Microsoft YaHei',size:10,color:'#24364A'},verticalAlignment:'center',rowHeight:25};
 const widths=[6,25,25,8,10,16,18,29];widths.forEach((x,i)=>{s.getRangeByIndexes(0,i,last,1).format.columnWidth=x;});
 s.getRange('A1:H1').format.rowHeight=10;s.getRange('A2:H2').merge();s.getRange('A2').format.font={name:'Microsoft YaHei',size:15,bold:true,color:NAVY};
 s.getRange(`A9:A${last}`).format.horizontalAlignment='center';s.getRange(`D9:E${last}`).format.horizontalAlignment='center';
 put(s,'A2',data.company);s.getRange('A3:H3').merge();s.getRange('A3').format.font={name:'Microsoft YaHei',size:13,bold:true,color:NAVY};
 s.getRange('A3:H3').format.rowHeight=30;s.getRange('A3:H3').format.borders={bottom:{style:'thin',color:GOLD}};
 s.getRange(`F9:G${last}`).setNumberFormat('#,##0.00');s.getRange(`E9:E${last}`).setNumberFormat('0');
}
function table(s,r){
 s.getRange(`A${r}:H${r}`).values=[['序号','项目','规格 / 型号','单位','数量','单价（元）','金额（元）','配置 / 范围']];
 s.getRange(`A${r}:H${r}`).format={fill:NAVY,font:{name:'Microsoft YaHei',size:10,bold:true,color:'#FFFFFF'},horizontalAlignment:'center',rowHeight:31,wrapText:true};
}
function total(s,r,label,f){put(s,`B${r}`,label);formula(s,`G${r}`,f);s.getRange(`A${r}:H${r}`).format={fill:PALE,font:{name:'Microsoft YaHei',size:10,bold:true,color:NAVY},rowHeight:28,borders:{bottom:{style:'thin',color:GOLD}}};}
function guardedSum(qty,amt,first,last){
 const gates=Array.from({length:last-first+1},(_,i)=>`OR(${qty}${i+first}="",${qty}${i+first}=0,ISNUMBER(${amt}${i+first}))`);
 return `=IF(AND(${gates.join(',')}),SUM(${amt}${first}:${amt}${last}),"")`;
}
function addOptions(w,m){
 const s=w.worksheets.getItem('配置选单');style(s,50);put(s,'A3',`${m.code} ${m.name} 配置选单`);
 s.getRange('A4:H4').merge();put(s,'A4','数量为每台舱体的选装数量；单价为人民币。');
 band(s,'A8:H8','外挂选装');table(s,9);
 const ext=[['顶部光伏组件','方案：沙漠版 / 满铺版','组'],['小型储能电池','','套'],['配套逆变器','','台'],['净水系统','','套'],['光伏控制器','','套'],['电缆及接头','','套'],['光伏安装支架','','套'],['安装配件及辅材','','套'],['外置设备安装服务','','项']];
 const interior=[['床','','张'],['床垫','','张'],['床头柜','','个'],['沙发','','套'],['桌椅','','套'],['衣柜','','个'],['储物柜','','个'],[m.price!==null?'空调升级差额':'空调','','台'],['冰箱','','台'],['电视机','','台'],['洗衣机','','台'],['电磁炉','','台'],['微波炉','','台'],['抽油烟机','','台'],['厨房台柜','','套'],['厨房水槽及龙头','','套'],[m.price!==null?'热水器升级差额':'热水器','','台'],[m.price!==null?'照明升级差额':'照明设备','','套'],['生活工具及用品','','套'],['家具家电安装服务','','项']];
 const draw=(arr,start)=>arr.forEach((x,i)=>{const r=start+i;s.getRange(`A${r}:H${r}`).values=[[i+1,x[0],x[1],x[2],0,null,null,null]];formula(s,`G${r}`,`=IF(OR(E${r}="",E${r}=0),0,IF(AND(ISNUMBER(E${r}),ISNUMBER(F${r})),ROUND(E${r}*F${r},2),""))`);s.getRange(`C${r}`).format.fill=INPUT;s.getRange(`E${r}:F${r}`).format.fill=INPUT;if(i%2===0){s.getRange(`A${r}:B${r}`).format.fill=PALE;s.getRange(`G${r}:H${r}`).format.fill=PALE;}s.getRange(`B${r}:C${r}`).format.wrapText=true;s.getRange(`H${r}`).format.wrapText=true;s.getRange(`A${r}:H${r}`).format.rowHeight=29;});
 draw(ext,10);total(s,20,'外置选装单台合计',guardedSum('E','G',10,18));band(s,'A22:H22','内部选装');table(s,23);draw(interior,24);total(s,45,'内部选装单台合计',guardedSum('E','G',24,43));
 if(m.price!==null){put(s,'H31','已含美的空调；仅填升级差额');put(s,'H40',m.code==='ZK-M38'?'已含创维即热式热水器；仅填升级差额':'已含即热式热水器；仅填升级差额');put(s,'H41','已含标配照明；仅填升级差额');}
 s.getRange('A48:H48').merge();put(s,'A48','运费由买方按实际出运时运价自付。');
 s.getRange('E10:E18').dataValidation={rule:{type:'whole',operator:'between',formula1:0,formula2:10000}};
 s.getRange('E24:E43').dataValidation={rule:{type:'whole',operator:'between',formula1:0,formula2:10000}};
 s.freezePanes.freezeRows(9);return s;
}
function addQuote(w,m){
 const s=w.worksheets.getItem('型号报价');style(s,32);put(s,'A3',`${m.code} ${m.name} 报价单`);
 s.getRange('A4:H4').merge();put(s,'A4',`报价日期：${data.date}　币种：人民币（元）`);
 put(s,'A5','客户：');s.getRange('B5:D5').merge();s.getRange('B5:D5').format.fill=INPUT;
 put(s,'F5','报价编号：');s.getRange('G5:H5').merge();s.getRange('G5:H5').format.fill=INPUT;
 s.getRange('A6:H6').merge();put(s,'A6',`产品系列：${m.series}`);
 s.getRange('A7:H7').merge();put(s,'A7',`外形尺寸：${m.dimensions}　面积：${m.area}`);
 table(s,9);s.getRange('A10:H10').values=[[1,m.name,m.code,'台',1,m.price,null,m.series]];
 s.getRange('A10:H10').format.rowHeight=32;s.getRange('E10:F10').format.fill=INPUT;
 formula(s,'G10','=IF(AND(ISNUMBER(E10),ISNUMBER(F10)),ROUND(E10*F10,2),"")');
 total(s,12,'基础产品金额','=IF(ISNUMBER(G10),G10,"")');
 put(s,'B14','外置选装');put(s,'D14','台');formula(s,'E14','=E10');formula(s,'F14',"=IF(ISNUMBER('配置选单'!G20),'配置选单'!G20,\"\")");formula(s,'G14','=IF(AND(ISNUMBER(E14),ISNUMBER(F14)),ROUND(E14*F14,2),"")');
 put(s,'B15','内部选装');put(s,'D15','台');formula(s,'E15','=E10');formula(s,'F15',"=IF(ISNUMBER('配置选单'!G45),'配置选单'!G45,\"\")");formula(s,'G15','=IF(AND(ISNUMBER(E15),ISNUMBER(F15)),ROUND(E15*F15,2),"")');
 total(s,17,'本方报价合计','=IF(AND(ISNUMBER(G12),ISNUMBER(G14),ISNUMBER(G15)),SUM(G12,G14:G15),"")');
 put(s,'B19','运费（买方自付）');s.getRange('F19:G19').format.fill=INPUT;
 put(s,'B20','运输港口');s.getRange('C20:H20').merge();s.getRange('C20:H20').format.fill=INPUT;
 s.getRange('A22:H22').merge();put(s,'A22','运费由买方按实际出运时运价自付，运输港口由买方指定。');
 put(s,'B24','付款条件');s.getRange('C24:H24').merge();s.getRange('C24:H24').format.fill=INPUT;
 put(s,'B25','交货周期');s.getRange('C25:H25').merge();s.getRange('C25:H25').format.fill=INPUT;
 put(s,'B26','贸易条款');s.getRange('C26:H26').merge();s.getRange('C26:H26').format.fill=INPUT;
 s.getRange('A28:H28').merge();put(s,'A28',m.price!==null?m.config:'产品功能与应用按对应型号方案配置。家具家电、光伏储能与净水独立选配。');
 s.getRange('A28:H28').format={wrapText:true,rowHeight:38};
 s.getRange('A30:H30').merge();put(s,'A30','联系人：杨涛峰　13319274381');
 s.getRange('A31:H31').merge();put(s,'A31','香港尖沙咀麼地道75号南洋中心2座7楼703室');
 s.getRange('E10').dataValidation={rule:{type:'whole',operator:'between',formula1:1,formula2:10000}};
 return s;
}
await fs.mkdir(OUT,{recursive:true});if(PREVIEW)await fs.mkdir(PREVIEW,{recursive:true});
const qa=[];
for(const m of data.items){
 const w=Workbook.create();w.worksheets.add('型号报价');w.worksheets.add('配置选单');addQuote(w,m);addOptions(w,m);w.recalculate();
 const check=await w.inspect({kind:'table',range:'型号报价!E10:G17',include:'values,formulas',tableMaxRows:8,tableMaxCols:3,maxChars:1300});
 const errors=await w.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:10},maxChars:1000});
 qa.push({code:m.code,price:m.price,inspect:check.ndjson,errors:errors.ndjson});
 if(PREVIEW){for(const [name,range,suffix]of[['型号报价','A1:H31','quote'],['配置选单','A1:H48','options']]){const b=await w.render({sheetName:name,range,scale:1,format:'png'});await fs.writeFile(path.join(PREVIEW,`${m.code}_${suffix}.png`),new Uint8Array(await b.arrayBuffer()));}}
 const f=await SpreadsheetFile.exportXlsx(w);await f.save(path.join(OUT,`${m.code}-quotation.xlsx`));console.log(`${m.code}: ${m.price===null?'空白':m.price}`);
}
if(PREVIEW)await fs.writeFile(path.join(PREVIEW,'artifact_checks.json'),JSON.stringify(qa,null,2));
