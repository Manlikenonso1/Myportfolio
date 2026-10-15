import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

# Extract footer from index.html
footer_match = re.search(r"(<footer>.*?</footer>)", idx_content, re.DOTALL)
if footer_match:
    footer = footer_match.group(1)

    with open('about.html', 'r', encoding='utf-8') as f:
        abt_content = f.read()

    # Replace footer in about.html
    new_abt = re.sub(r"<footer>.*?</footer>", footer, abt_content, flags=re.DOTALL)

    with open('about.html', 'w', encoding='utf-8') as f:
        f.write(new_abt)
    print("Successfully replaced footer in about.html")
else:
    print("Could not find footer in index.html")
