import os, json

folders = [
  'acoustic-ceilings-wallpaper',
  'acoustic-panels',
  'commercial-spaces',
  'fun-projects',
  'industrial-machinery',
  'night-clubs',
  'restaurants',
  'schools-worship',
  'tech-av'
]
extensions = {'.jpg', '.jpeg', '.png', '.webp'}

for folder in folders:
    path = 'public/gallery/' + folder
    if not os.path.isdir(path):
        continue
    files = sorted([
        f for f in os.listdir(path)
        if os.path.splitext(f)[1].lower() in extensions
    ])
    with open(path + '/images.json', 'w') as mf:
        json.dump(files, mf, indent=2)
    print(folder + ': ' + str(len(files)) + ' images')
