"""按网站统一型号数据生成中文可编辑报价单。"""
from pathlib import Path
import os
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parents[1]


def brand_metadata(file):
    # Preserve the QName used by xsi:type on OOXML creation/modification dates.
    # ElementTree otherwise renames the element prefix while leaving the
    # dcterms:W3CDTF attribute value unchanged, which prevents Excel opening it.
    for prefix, uri in {
        'cp': 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
        'dc': 'http://purl.org/dc/elements/1.1/',
        'dcterms': 'http://purl.org/dc/terms/',
        'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    }.items():
        ET.register_namespace(prefix, uri)
    with ZipFile(file) as z:
        parts = {item.filename: (item, z.read(item.filename)) for item in z.infolist()}
    ns = {'dc': 'http://purl.org/dc/elements/1.1/', 'cp': 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties'}
    if 'docProps/core.xml' in parts:
        info, xml = parts['docProps/core.xml']
        doc = ET.fromstring(xml)
    else:
        info = ZipInfo('docProps/core.xml')
        info.compress_type = ZIP_DEFLATED
        doc = ET.Element('{' + ns['cp'] + '}coreProperties')
        ct_info, ct_xml = parts['[Content_Types].xml']
        ct = ET.fromstring(ct_xml)
        ET.SubElement(ct, '{http://schemas.openxmlformats.org/package/2006/content-types}Override', {
            'PartName': '/docProps/core.xml',
            'ContentType': 'application/vnd.openxmlformats-package.core-properties+xml'})
        parts['[Content_Types].xml'] = (ct_info, ET.tostring(ct, encoding='utf-8', xml_declaration=True))
        rel_info, rel_xml = parts['_rels/.rels']
        rels = ET.fromstring(rel_xml)
        rel_id = 'rIdBrandCore'
        ET.SubElement(rels, '{http://schemas.openxmlformats.org/package/2006/relationships}Relationship', {
            'Id': rel_id,
            'Type': 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties',
            'Target': 'docProps/core.xml'})
        parts['_rels/.rels'] = (rel_info, ET.tostring(rels, encoding='utf-8', xml_declaration=True))
    for key in ['dc:creator', 'cp:lastModifiedBy']:
        uri, name = key.split(':')
        tag = '{' + ns[uri] + '}' + name
        element = doc.find(tag)
        if element is None:
            element = ET.SubElement(doc, tag)
        element.text = '中科国际'
    parts['docProps/core.xml'] = (info, ET.tostring(doc, encoding='utf-8', xml_declaration=True))
    temp = file.with_suffix('.rewrite')
    with ZipFile(temp, 'w', ZIP_DEFLATED) as z:
        for key, (item, value) in parts.items():
            z.writestr(item, value)
    temp.replace(file)


if __name__ == '__main__':
    bundled = Path.home() / '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
    node = os.environ.get('CODEX_NODE') or (str(bundled) if bundled.exists() else shutil.which('node'))
    if not node:
        raise RuntimeError('需要可用的 Node.js 及 @oai/artifact-tool 运行环境。')
    subprocess.run([node, str(ROOT / 'scripts/generate_quotes.mjs')], check=True)
    for file in sorted((ROOT / 'assets/files/quotes').glob('*-quotation.xlsx')):
        brand_metadata(file)
    inspection_dir = Path(os.environ.get('ZK_QUOTE_PREVIEW_DIR') or tempfile.mkdtemp(prefix='zk-quote-checks-'))
    inspection_dir.mkdir(parents=True, exist_ok=True)
    for file in (ROOT / 'assets/files/quotes').glob('*.inspect.ndjson'):
        shutil.move(str(file), str(inspection_dir / file.name))
    print('16款中文报价单已生成。')
