import re

files = [
    "1-IMG_8399.webp",
    "10-videooflivingroom.mp4",
    "11-20170429_135134.webp",
    "12- 20170704_115632.webp",
    "13-IMG_20171220_124345_678.webp",
    "14-20171220_101411.webp",
    "15-IMG_9358.webp",
    "16-IMG_9752_7.webp",
    "17-IMG_9946_12-1.webp",
    "2-IMG_8412.webp",
    "3-20170222_213345.mp4",
    "4-Mvi_8404.mp4",
    "5-Mvi_8436.mp4",
    "6-IMG_8749.webp",
    "7-IMG_8421.webp",
    "8-tower-full.jpg",
    "9-tower-light.jpg"
]

def get_sort_key(filename):
    match = re.match(r'(\d+)-', filename)
    if match:
        return int(match.group(1))
    return float('inf')

sorted_files = sorted(files, key=get_sort_key)

print("        media: [")
for f in sorted_files:
    ext = f.split('.')[-1].lower()
    mtype = 'video' if ext == 'mp4' else 'image'
    # Generate a clean alt text
    alt = f.split('.')[0].replace('-', ' ')
    print(f"""            {{ type: '{mtype}', src: "/assets/images/about/Stage2/{f}", alt: "{alt}" }},""")
print("        ]")
