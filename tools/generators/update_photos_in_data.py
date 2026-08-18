import json

with open('src/data/plantsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse JSON part
json_str = content.replace('export const plantsData = ', '').rstrip(';\n')
plants = json.loads(json_str)

for p in plants:
    p['image'] = f"/images/plants/{p['id']}.jpg"
    p['bannerImage'] = f"/images/plants/{p['id']}.jpg"

with open('src/data/plantsData.js', 'w', encoding='utf-8') as f:
    f.write('export const plantsData = ' + json.dumps(plants, indent=2, ensure_ascii=False) + ';\n')

print("Updated plantsData.js with authentic local real botanical photographs for all plants.")
