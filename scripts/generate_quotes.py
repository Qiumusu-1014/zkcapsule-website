from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "files" / "quotes"
OUT.mkdir(parents=True, exist_ok=True)

BLUE = "126BFF"
NAVY = "0B1220"
BORDER = Border(
    left=Side(style="thin", color="D7E2F1"),
    right=Side(style="thin", color="D7E2F1"),
    top=Side(style="thin", color="D7E2F1"),
    bottom=Side(style="thin", color="D7E2F1"),
)

COMMON_OPTIONS = [
    ("全套卫浴 / 带洗浴", 25000),
    ("储物柜（衣物收纳）", 7000),
    ("床及床垫（单套）", 9300),
    ("第二床位 / 第二床垫", 3200),
    ("桌椅套装（等级及数量按采购确认）", 2500),
    ("电器包（电视机、冰箱、微波炉、烤箱等）", 40000),
    ("电动窗帘", 5700),
    ("Low-E 玻璃升级", 20000),
    ("天窗", 15000),
    ("内饰升级包", 40000),
    ("地暖系统", 20000),
    ("灯带 / 氛围照明系统", 2500),
    ("中央空调", 40000),
    ("挂机空调", 4700),
    ("新风系统", 15000),
    ("顶部太阳能光伏板（约3kW，含支架及布线辅材）", 25000),
    ("储能电池系统（约10kWh，含BMS及安装辅材）", 50000),
    ("逆变器 / 能源管理系统", 20000),
    ("星链连接硬件及安装辅材（月费另计，按当地套餐执行）", 33200),
    ("国际通信系统（WiFi / GPS / 北斗）", 10800),
    ("LED 大屏幕", 28000),
    ("投影仪", 5800),
    ("3D 展示系统", 25000),
    ("AI 智能全系统（前台 / 后台 / 数据中心基础版）", 100000),
    ("AI 语音控制 / 设备联动全屋智能", 20000),
    ("净水系统（RO / 过滤 / 水泵，按最终方案确认）", 10000),
    ("智能门锁", 1600),
    ("监控 / 烟感 / 水浸报警基础包", 4700),
    ("运输成本合计（参考，按路线、港口、安装条件确认）", 96700),
]

MODELS = [
    ("ZK01", "基础生活舱", "ZK01 基础版太空舱（参考28㎡）", 450000, []),
    (
        "ZK02",
        "绿色度假舱",
        "ZK01 基础版 + ZK02 绿色豪华版升级包",
        570000,
        [("ZK02 绿色豪华版升级包（顶部光伏 + 储能等）", 120000)],
    ),
    (
        "ZK03",
        "文化教育舱",
        "ZK01 基础版 + ZK03 文化宣传 / 教育培训升级包",
        700000,
        [("ZK03 文化宣传 / 教育培训升级包", 250000)],
    ),
    (
        "ZK04",
        "医疗服务舱",
        "ZK01 基础版 + ZK04 诊疗医药全包含选配包",
        850000,
        [("ZK04 诊疗医药全包含选配包", 400000)],
    ),
    ("ZK05", "露台舱", "项目定制报价模板，价格待项目确认", None, []),
    ("ZK06", "叠加度假套房舱", "项目定制报价模板，价格待项目确认", None, []),
    ("ZK07", "商业服务舱", "项目定制报价模板，价格待项目确认", None, []),
    ("ZK08", "应急指挥舱", "项目定制报价模板，价格待项目确认", None, []),
    ("ZK09", "旗舰定制舱", "项目定制报价模板，价格待项目确认", None, []),
    ("ABADI", "高端定制智慧太空舱", "项目定制报价模板，价格待项目确认", None, []),
]


def price(value):
    return "项目确认" if value is None else value


def style_sheet(ws):
    for row in ws.iter_rows():
        for cell in row:
            cell.border = BORDER
            cell.alignment = Alignment(vertical="center", wrap_text=True)

    for row_index in (6, 12):
        for col_index in range(1, 5):
            cell = ws.cell(row_index, col_index)
            cell.font = Font(bold=True, color="FFFFFF")
            cell.fill = PatternFill("solid", fgColor=BLUE)

    widths = {"A": 34, "B": 54, "C": 20, "D": 28}
    for col, width in widths.items():
        ws.column_dimensions[col].width = width

    for row_index in range(1, ws.max_row + 1):
        ws.row_dimensions[row_index].height = 24

    ws.freeze_panes = "A7"


def build_quote(code, name, desc, total, upgrades):
    wb = Workbook()
    ws = wb.active
    ws.title = "报价单"
    ws.merge_cells("A1:D1")
    ws["A1"] = f"{code} {name} 报价单"
    ws["A1"].font = Font(size=18, bold=True, color="FFFFFF")
    ws["A1"].fill = PatternFill("solid", fgColor=NAVY)
    ws["A1"].alignment = Alignment(horizontal="center")

    model_note = (
        "ZK01-ZK04 来源于现有 ZK01-05 报价单；原表 ZK05 仅作为移动款附加项"
        if code in {"ZK01", "ZK02", "ZK03", "ZK04"}
        else "项目定制型号，价格需以项目方案和采购清单确认"
    )
    rows = [
        ("公司", "中科国际 Zhongke International", "", ""),
        ("地址", "香港尖沙咀麼地道75号南洋中心2座7楼", "", ""),
        ("联系人", "杨涛峰 / 13319274381", "", ""),
        ("币种", "人民币（RMB）参考价；最终以双方确认采购清单为准", "", ""),
        ("", "", "", ""),
        ("项目", "说明", "价格（人民币，参考）", "备注"),
        (f"{code} {name}", desc, price(total), model_note),
    ]
    for row in rows:
        ws.append(row)

    for item, item_price in upgrades:
        ws.append((item, "型号升级包", item_price, "可与基础版组合"))

    if code in {"ZK01", "ZK02", "ZK03", "ZK04"}:
        ws.append(
            (
                "移动款附加项",
                "适用于 ZK01-ZK04 的车轮及牵引系统；不对应当前网站 ZK05 露台舱",
                120000,
                "可选",
            )
        )
    ws.append(("", "", "", ""))
    ws.append(("可选配置", "说明", "参考价格", "勾选/确认"))

    for item, item_price in COMMON_OPTIONS:
        ws.append((item, "按项目实际配置确认", item_price, "□"))

    ws.append(("", "", "", ""))
    ws.append(("报价说明", "本报价单为官网公开参考文件，不含税费、关税、当地认证、现场土建及特殊运输安装条件。", "", ""))
    ws.append(("报价说明", "医疗、通信、无人机、星链等涉及当地许可或服务月费的项目需另行确认。", "", ""))
    ws.append(("报价说明", "原 ZK01-05 表格中的 ZK05 为“移动拖车版”附加项，不作为当前 ZK05 露台舱价格。", "", ""))

    style_sheet(ws)
    path = OUT / f"{code}-quotation.xlsx"
    wb.save(path)
    return path


if __name__ == "__main__":
    for model in MODELS:
        print(build_quote(*model))
