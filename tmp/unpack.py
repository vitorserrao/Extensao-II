import zlib
import base64
import json
import sys

# Read manifest from stdin or file
with open('/tmp/bundle.html', 'r', encoding='utf-8') as f:
    content = f.read()

import re
m = re.search(r'<script type="__bundler/manifest">\s*({.*?})\s*</script>', content, re.DOTALL)
if not m:
    print("Manifest not found")
    sys.exit(1)

manifest = json.loads(m.group(1))

for uuid, entry in manifest.items():
    raw_b64 = entry['data']
    compressed_bytes = base64.b64decode(raw_b64)
    if entry.get('compressed'):
        # gzip decompress (zlib with wbits = 16 + zlib.MAX_WBITS)
        decompressed = zlib.decompress(compressed_bytes, 16 + zlib.MAX_WBITS)
    else:
        decompressed = compressed_bytes
    
    html_text = decompressed.decode('utf-8')
    filename = f'/tmp/{uuid}.html'
    with open(filename, 'w', encoding='utf-8') as out:
        out.write(html_text)
    print(f"Wrote {filename} (length {len(html_text)})")
