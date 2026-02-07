# file: generate_image_json.py

import os
import json

# Folder containing images
IMAGE_FOLDER = './'  # adjust path if needed
# Base URL for links (change to your server URL if needed)
BASE_URL = 'http://localhost:3000/images'

# Allowed image extensions
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}

# List all files in the folder
files = os.listdir(IMAGE_FOLDER)

# Filter image files
images = [f for f in files if os.path.splitext(f)[1].lower() in IMAGE_EXTENSIONS]

# Build JSON data
image_data = []
for idx, file in enumerate(images, start=1):
    image_data.append({
        'id': idx,
        'filename': file,
        'link': f"{BASE_URL}/{file}"
    })

# Write to JSON file
with open('images.json', 'w') as json_file:
    json.dump(image_data, json_file, indent=2)

print("images.json created successfully!")
