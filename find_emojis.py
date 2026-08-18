import os
import re

# Emoji regex range
emoji_pattern = re.compile(
    "[\U00010000-\U0010ffff]|[\u2600-\u27ff]|[\u2300-\u23ff]|[\u2b50-\u2b55]|[\u200d]|[\ufe0f]",
    flags=re.UNICODE
)

files_with_emojis = []

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = emoji_pattern.findall(content)
                if matches:
                    files_with_emojis.append((path, list(set(matches))))

print("Files containing emojis:", files_with_emojis)
