from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "files" / "quotes"
OUT.mkdir(parents=True, exist_ok=True)

BLUE = "126BFF"
BLUE_DARK = "0D4ED8"
NAVY = "0B1220"
PAPER = "F4F8FF"
LINE = "D7E2F1"
MUTED = "53657E"
WHITE = "FFFFFF"

THIN_LINE = Side(style="thin", color=LINE)
BORDER = Border(left=THIN_LINE, right=THIN_LINE, top=THIN_LINE, bottom=THIN_LINE)


COMMON_OPTIONS = [
    ("全套卫浴 / 带洗浴", "Complete bathroom / shower", 25000),
    ("储物柜（衣物收纳）", "Storage cabinet / wardrobe", 7000),
    ("床及床垫（单套）", "Bed and mattress set", 9300),
    ("第二床位 / 第二床垫", "Second bed / second mattress", 3200),
    ("桌椅套装（等级及数量按采购确认）", "Desk and chair set, grade and quantity to be confirmed", 2500),
    ("电器包（电视机、冰箱、微波炉、烤箱等）", "Appliance package: TV, refrigerator, microwave, oven, etc.", 40000),
    ("电动窗帘", "Motorized curtains", 5700),
    ("Low-E 玻璃升级", "Low-E glass upgrade", 20000),
    ("天窗", "Skylight", 15000),
    ("内饰升级包", "Interior finish upgrade package", 40000),
    ("地暖系统", "Floor heating system", 20000),
    ("灯带 / 氛围照明系统", "Light strip / ambient lighting system", 2500),
    ("中央空调", "Central air conditioning", 40000),
    ("挂机空调", "Wall-mounted air conditioner", 4700),
    ("新风系统", "Fresh air ventilation system", 15000),
    ("顶部太阳能光伏板（约3kW，含支架及布线辅材）", "Roof solar PV panels, approx. 3kW including brackets and wiring accessories", 25000),
    ("储能电池系统（约10kWh，含BMS及安装辅材）", "Energy storage battery system, approx. 10kWh including BMS and installation accessories", 50000),
    ("逆变器 / 能源管理系统", "Inverter / energy management system", 20000),
    ("星链连接硬件及安装辅材（月费另计，按当地套餐执行）", "Starlink hardware and installation accessories; monthly fee excluded", 33200),
    ("国际通信系统（WiFi / GPS / 北斗）", "International communication system: WiFi / GPS / BeiDou", 10800),
    ("LED 大屏幕", "LED display screen", 28000),
    ("投影仪", "Projector", 5800),
    ("3D 展示系统", "3D presentation system", 25000),
    ("AI 智能全系统（前台 / 后台 / 数据中心基础版）", "AI smart system, basic front desk / backend / data center version", 100000),
    ("AI 语音控制 / 设备联动全屋智能", "AI voice control / device-linked smart system", 20000),
    ("净水系统（RO / 过滤 / 水泵，按最终方案确认）", "Water purification system: RO / filter / pump, subject to final plan", 10000),
    ("智能门锁", "Smart door lock", 1600),
    ("监控 / 烟感 / 水浸报警基础包", "Basic security package: camera / smoke alarm / water leak alarm", 4700),
    ("运输成本合计（参考，按路线、港口、安装条件确认）", "Estimated logistics cost, subject to route, port and installation conditions", 96700),
]

MODELS = [
    {
        "code": "ZK01",
        "zh_name": "基础生活舱",
        "en_name": "Basic Living Capsule",
        "zh_desc": "ZK01 基础版太空舱（参考28㎡）",
        "en_desc": "ZK01 basic smart capsule, approx. 28 sqm reference configuration",
        "total": 450000,
        "upgrades": [],
    },
    {
        "code": "ZK02",
        "zh_name": "绿色度假舱",
        "en_name": "Green Resort Capsule",
        "zh_desc": "ZK01 基础版 + ZK02 绿色豪华版升级包",
        "en_desc": "ZK01 basic version plus ZK02 green luxury upgrade package",
        "total": 570000,
        "upgrades": [("ZK02 绿色豪华版升级包（顶部光伏 + 储能等）", "ZK02 green luxury upgrade package: rooftop PV, energy storage, etc.", 120000)],
    },
    {
        "code": "ZK03",
        "zh_name": "文化教育舱",
        "en_name": "Culture & Education Capsule",
        "zh_desc": "ZK01 基础版 + ZK03 文化宣传 / 教育培训升级包",
        "en_desc": "ZK01 basic version plus ZK03 culture / education upgrade package",
        "total": 700000,
        "upgrades": [("ZK03 文化宣传 / 教育培训升级包", "ZK03 culture / education upgrade package", 250000)],
    },
    {
        "code": "ZK04",
        "zh_name": "医疗服务舱",
        "en_name": "Medical Service Capsule",
        "zh_desc": "ZK01 基础版 + ZK04 诊疗医药全包含选配包",
        "en_desc": "ZK01 basic version plus ZK04 medical service optional package",
        "total": 850000,
        "upgrades": [("ZK04 诊疗医药全包含选配包", "ZK04 medical service optional package", 400000)],
    },
    {"code": "ZK05", "zh_name": "露台舱", "en_name": "Terrace Capsule", "zh_desc": "项目定制报价模板，价格待项目确认", "en_desc": "Customized project quotation template; price to be confirmed by project", "total": None, "upgrades": []},
    {"code": "ZK06", "zh_name": "叠加度假套房舱", "en_name": "Stacked Resort Suite Capsule", "zh_desc": "项目定制报价模板，价格待项目确认", "en_desc": "Customized project quotation template; price to be confirmed by project", "total": None, "upgrades": []},
    {"code": "ZK07", "zh_name": "商业服务舱", "en_name": "Commercial Service Capsule", "zh_desc": "项目定制报价模板，价格待项目确认", "en_desc": "Customized project quotation template; price to be confirmed by project", "total": None, "upgrades": []},
    {"code": "ZK08", "zh_name": "应急指挥舱", "en_name": "Emergency Command Capsule", "zh_desc": "项目定制报价模板，价格待项目确认", "en_desc": "Customized project quotation template; price to be confirmed by project", "total": None, "upgrades": []},
    {"code": "ZK09", "zh_name": "旗舰定制舱", "en_name": "Flagship Customized Capsule", "zh_desc": "项目定制报价模板，价格待项目确认", "en_desc": "Customized project quotation template; price to be confirmed by project", "total": None, "upgrades": []},
    {"code": "ABADI", "zh_name": "高端定制智慧太空舱", "en_name": "Premium Customized Smart Capsule", "zh_desc": "项目定制报价模板，价格待项目确认", "en_desc": "Customized project quotation template; price to be confirmed by project", "total": None, "upgrades": []},
]


def price(value, lang):
    if value is None:
        return "项目确认" if lang == "zh" else "Project confirmation"
    return value


def note_for_model(code, lang):
    if code in {"ZK01", "ZK02", "ZK03", "ZK04"}:
        return (
            "含现有 ZK01-05 报价资料中对应 ZK01-ZK04 口径；移动款为附加项"
            if lang == "zh"
            else "Based on current ZK01-ZK04 pricing scope; mobile version is optional add-on"
        )
    return "以项目方案确认" if lang == "zh" else "Subject to project proposal"


def mobile_addon_row(lang):
    if lang == "zh":
        return ("移动款附加项", "适用于 ZK01-ZK04 的车轮及牵引系统；不对应当前 ZK05 露台舱", 120000, "可选")
    return ("Mobile version add-on", "Wheel and towing system for ZK01-ZK04; not the current ZK05 Terrace Capsule", 120000, "Optional")


def apply_sheet_style(ws):
    ws.sheet_view.showGridLines = False
    ws.freeze_panes = "A10"

    widths = {"A": 24, "B": 62, "C": 18, "D": 24}
    for col, width in widths.items():
        ws.column_dimensions[col].width = width

    for row in ws.iter_rows():
        for cell in row:
            cell.border = BORDER
            cell.alignment = Alignment(vertical="center", wrap_text=True)
            cell.font = Font(name="Microsoft YaHei", size=10, color=NAVY)

    for row_index in range(1, ws.max_row + 1):
        ws.row_dimensions[row_index].height = 24

    ws.row_dimensions[1].height = 34
    ws.row_dimensions[2].height = 24
    ws.row_dimensions[6].height = 36
    ws.row_dimensions[8].height = 30
    ws.row_dimensions[12].height = 30

    ws["A1"].font = Font(name="Microsoft YaHei", size=18, bold=True, color=WHITE)
    ws["A1"].fill = PatternFill("solid", fgColor=NAVY)
    ws["A1"].alignment = Alignment(horizontal="center", vertical="center")

    for cell in ws[2]:
        cell.fill = PatternFill("solid", fgColor=PAPER)
        cell.font = Font(name="Microsoft YaHei", size=10, color=MUTED)

    for row_index in (8, 12):
        for col_index in range(1, 5):
            cell = ws.cell(row_index, col_index)
            cell.font = Font(name="Microsoft YaHei", size=10, bold=True, color=WHITE)
            cell.fill = PatternFill("solid", fgColor=BLUE)
            cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

    for row_index in range(9, ws.max_row + 1):
        if row_index % 2 == 0:
            for col_index in range(1, 5):
                ws.cell(row_index, col_index).fill = PatternFill("solid", fgColor="FAFCFF")

    for col_index in (3,):
        for row_index in range(9, ws.max_row + 1):
            cell = ws.cell(row_index, col_index)
            if isinstance(cell.value, int):
                cell.number_format = '¥#,##0'
                cell.alignment = Alignment(horizontal="right", vertical="center", wrap_text=True)

    ws.auto_filter.ref = f"A8:D{ws.max_row}"

    # Print and view settings
    ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True


def append_sheet(ws, model, lang):
    code = model["code"]
    name = model["zh_name"] if lang == "zh" else model["en_name"]
    desc = model["zh_desc"] if lang == "zh" else model["en_desc"]
    title_suffix = "报价单" if lang == "zh" else "Quotation"
    currency = "人民币（RMB）参考价" if lang == "zh" else "RMB reference price"
    contract_note = "最终价格以双方签署的合同价格为准" if lang == "zh" else "Final price is subject to the signed contract"

    ws.merge_cells("A1:D1")
    ws["A1"] = f"{code} {name} {title_suffix}"
    ws.append([""])
    ws.append(["公司 / Company", "中科国际 Zhongke International", "", ""])
    ws.append(["地址 / Address", "香港尖沙咀麼地道75号南洋中心2座7楼", "", ""])
    ws.append(["联系人 / Contact", "杨涛峰 / 13319274381", "", ""])
    ws.append(["币种 / Currency", currency, "", ""])
    ws.append(["价格说明 / Price Note", contract_note, "", ""])
    ws.append([""])
    if lang == "zh":
        ws.append(["项目", "说明", "参考价格", "备注"])
        ws.append([f"{code} {name}", desc, price(model["total"], lang), note_for_model(code, lang)])
        for zh, en, amount in model["upgrades"]:
            ws.append([zh, "型号升级包", amount, "可与基础版组合"])
        if code in {"ZK01", "ZK02", "ZK03", "ZK04"}:
            ws.append(mobile_addon_row(lang))
        ws.append([""])
        ws.append(["可选配置", "说明", "参考价格", "备注"])
        for zh, en, amount in COMMON_OPTIONS:
            ws.append([zh, "", amount, "可选"])
    else:
        ws.append(["Item", "Description", "Reference Price", "Remark"])
        ws.append([f"{code} {name}", desc, price(model["total"], lang), note_for_model(code, lang)])
        for zh, en, amount in model["upgrades"]:
            ws.append([en, "Model upgrade package", amount, "Can be combined with basic version"])
        if code in {"ZK01", "ZK02", "ZK03", "ZK04"}:
            ws.append(mobile_addon_row(lang))
        ws.append([""])
        ws.append(["Optional Configuration", "Description", "Reference Price", "Remark"])
        for zh, en, amount in COMMON_OPTIONS:
            ws.append([en, "", amount, "Optional"])

    # Make metadata rows visually compact without creating a repeated quotation note section.
    for row_index in range(3, 8):
        ws.merge_cells(start_row=row_index, start_column=2, end_row=row_index, end_column=4)

    apply_sheet_style(ws)


def build_quote(model):
    wb = Workbook()
    ws_zh = wb.active
    ws_zh.title = "中文报价单"
    append_sheet(ws_zh, model, "zh")

    ws_en = wb.create_sheet("English Quotation")
    append_sheet(ws_en, model, "en")

    path = OUT / f"{model['code']}-quotation.xlsx"
    wb.save(path)
    return path


if __name__ == "__main__":
    for item in MODELS:
        print(build_quote(item))
