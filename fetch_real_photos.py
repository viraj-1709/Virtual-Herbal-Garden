import urllib.request
import json
import os

plants_wiki = {
    'tulsi': 'Ocimum_tenuiflorum',
    'neem': 'Azadirachta_indica',
    'aloe-vera': 'Aloe_vera',
    'ashwagandha': 'Withania_somnifera',
    'turmeric': 'Curcuma_longa',
    'ginger': 'Ginger',
    'brahmi': 'Bacopa_monnieri',
    'giloy': 'Tinospora_cordifolia',
    'amla': 'Phyllanthus_emblica',
    'moringa': 'Moringa_oleifera',
    'shatavari': 'Asparagus_racemosus',
    'peppermint': 'Mentha_arvensis'
}

headers = {'User-Agent': 'VirtualHerbalGardenApp/1.0 (contact@sih2026.gov.in)'}
os.makedirs('public/images/plants', exist_ok=True)

downloaded = {}

for plant_id, wiki_title in plants_wiki.items():
    try:
        api_url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{wiki_title}"
        req = urllib.request.Request(api_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            img_url = data.get('originalimage', {}).get('source') or data.get('thumbnail', {}).get('source')
            if img_url:
                img_req = urllib.request.Request(img_url, headers=headers)
                file_path = f"public/images/plants/{plant_id}.jpg"
                with urllib.request.urlopen(img_req, timeout=15) as img_resp, open(file_path, 'wb') as f:
                    f.write(img_resp.read())
                downloaded[plant_id] = f"/images/plants/{plant_id}.jpg"
                print(f"Downloaded real photo for {plant_id}: {os.path.getsize(file_path)} bytes")
            else:
                print(f"No image found for {wiki_title}")
    except Exception as e:
        print(f"Error fetching {plant_id}: {e}")

print("Total downloaded:", len(downloaded))
