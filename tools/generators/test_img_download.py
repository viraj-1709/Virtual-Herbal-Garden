import urllib.request
import os

os.makedirs('public/images/plants', exist_ok=True)

# Wikimedia headers
headers = {
    'User-Agent': 'VirtualHerbalGardenBot/1.0 (https://sih.gov.in; educational demo) Python/3.11'
}

test_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Curcuma_longa_roots.jpg/800px-Curcuma_longa_roots.jpg'
req = urllib.request.Request(test_url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as response, open('public/images/plants/turmeric.jpg', 'wb') as out_file:
        out_file.write(response.read())
    print("Test image downloaded successfully:", os.path.getsize('public/images/plants/turmeric.jpg'), "bytes")
except Exception as e:
    print("Download test error:", e)
