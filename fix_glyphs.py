with open('src/App.jsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace unicode ✕ with Lucide X
c = c.replace('✕', '<X className="w-3.5 h-3.5" />')
if 'X,' not in c and '{ X,' not in c:
    c = c.replace("import { Sprout,", "import { Sprout, X,")

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(c)

with open('src/components/PlantDetailModal.jsx', 'r', encoding='utf-8') as f:
    m = f.read()
m = m.replace('✓', '')
with open('src/components/PlantDetailModal.jsx', 'w', encoding='utf-8') as f:
    f.write(m)

print("Replaced unicode glyphs.")
