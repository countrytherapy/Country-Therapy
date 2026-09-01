#!/usr/bin/env python3
"""
Convert team images to AVIF and WebP formats for faster loading.
Requires: pip install Pillow pillow-avif-plugin pillow-webp
"""

import os
from pathlib import Path
from PIL import Image

def convert_images():
    team_dir = Path("assets/images/team")
    
    # Image formats to convert (exclude already-converted ones)
    jpg_formats = {".jpg", ".jpeg", ".png"}
    
    converted = 0
    for img_file in team_dir.glob("*"):
        if img_file.suffix.lower() not in jpg_formats:
            continue
            
        base_name = img_file.stem
        avif_path = team_dir / f"{base_name}.avif"
        webp_path = team_dir / f"{base_name}.webp"
        
        # Skip if already converted
        if avif_path.exists() and webp_path.exists():
            print(f"✓ Already converted: {img_file.name}")
            continue
        
        try:
            print(f"Converting: {img_file.name}...", end=" ")
            img = Image.open(img_file)
            
            # Convert to AVIF
            if not avif_path.exists():
                img.save(avif_path, "AVIF", quality=85)
            
            # Convert to WebP  
            if not webp_path.exists():
                img.save(webp_path, "WEBP", quality=85)
            
            original_size = img_file.stat().st_size
            avif_size = avif_path.stat().st_size
            reduction = (1 - avif_size / original_size) * 100
            print(f"✓ ({original_size/1024/1024:.1f}MB → {avif_size/1024:.0f}KB, {reduction:.0f}% smaller)")
            converted += 1
            
        except Exception as e:
            print(f"✗ Error: {e}")
    
    print(f"\n✓ Successfully converted {converted} images")
    print("\nNext steps:")
    print("1. Review the HTML to confirm picture elements are being used")
    print("2. Test loading on your site")
    print("3. Consider deleting old JPG/PNG files after confirming images load correctly")

if __name__ == "__main__":
    convert_images()
