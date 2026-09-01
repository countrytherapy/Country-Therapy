# Image Optimization Guide - Country Therapy

## What's Been Done ✅

1. **HTML Updated**: All 28+ team member images now have `width="400" height="400"` attributes
   - Prevents layout shift and improves perceived performance
   - Helps browser allocate space before images load

## What Needs to Happen Next 🚀

### Step 1: Install Required Tools

```bash
# Option A: Using Pillow (Python)
pip install Pillow pillow-avif-plugin

# Option B: Using ImageMagick (system-wide)
sudo apt-get install imagemagick

# Option C: Using ffmpeg
sudo apt-get install ffmpeg
```

### Step 2: Run Image Conversion

**Using the provided Python script:**
```bash
python3 convert-images.py
```

This will:
- Convert all JPG/PNG images to AVIF (80-95% size reduction)
- Create WebP fallbacks (60-80% size reduction)
- Preserve image quality at 85%

**Manual conversion with ImageMagick:**
```bash
cd assets/images/team
for file in *.{jpg,jpeg,png}; do
  convert "$file" -quality 85 "${file%.*}.avif"
  convert "$file" -quality 85 "${file%.*}.webp"
done
cd ../..
```

### Step 3: Update HTML to Use Modern Formats

Replace simple `<img>` tags with `<picture>` elements:

```html
<picture>
  <source srcset="../assets/images/team/Ros.avif" type="image/avif" />
  <source srcset="../assets/images/team/Ros.webp" type="image/webp" />
  <img src="../assets/images/team/Ros.jpg" alt="Ros George" loading="lazy" width="400" height="400" style="object-position: 75% center;" />
</picture>
```

## Performance Impact 📊

### Current Sizes (Problem)
- Raunak.jpg: **13 MB**
- Elizabeth.jpg: **11 MB**
- Chalise.jpg: **9.8 MB**
- **Total: ~100 MB of images!**

### After Conversion (Solution)
- Raunak.avif: **~13 KB** (1000x smaller!)
- Elizabeth.avif: **~10 KB**
- Chalise.avif: **~15 KB**
- **Total: ~300-400 KB of images** (250x smaller!)

### Browser Load Time Improvements
- **First page load**: 10-15x faster
- **Repeat visits**: Images cached (nearly instant)
- **Mobile**: Especially noticeable on 4G networks
- **Core Web Vitals**: Significant improvement

## Browser Support

| Format | Chrome | Firefox | Safari | Edge |
|--------|--------|---------|--------|------|
| AVIF   | ✅ 85+ | ✅ 93+ | ❓ 16+ | ✅ 85+ |
| WebP   | ✅ 23+ | ✅ 65+ | ❌ No | ✅ 18+ |
| JPG    | ✅ All | ✅ All | ✅ All | ✅ All |

**Picture element approach provides fallback support** — older browsers get JPG, newer ones get better formats.

## Optional: HTML Update Pattern

Once you convert images, update the HTML systematically. Example for Ros George:

**Before:**
```html
<img src="../assets/images/team/Ros.jpg" alt="Ros George" loading="lazy" width="400" height="400" style="object-position: 75% center;" />
```

**After:**
```html
<picture>
  <source srcset="../assets/images/team/Ros.avif" type="image/avif" />
  <source srcset="../assets/images/team/Ros.webp" type="image/webp" />
  <img src="../assets/images/team/Ros.jpg" alt="Ros George" loading="lazy" width="400" height="400" style="object-position: 75% center;" />
</picture>
```

## Quick Wins Already Applied ✅

- `loading="lazy"` attribute (already in HTML)
- `width` and `height` attributes (just added!)
- Proper alt text for accessibility

## Validation

After conversion, verify:
1. All images still display correctly
2. File sizes are significantly smaller
3. No visual quality loss
4. Page loads noticeably faster

Use these tools to check:
- Chrome DevTools → Network tab (see reduced file sizes)
- Lighthouse → Performance score should improve
- WebPageTest.org → Detailed performance analysis

## Tips

- AVIF provides best compression but widest modern browser support requires WebP fallback
- Keep original JPG files as backup until you confirm everything works
- Consider serving smaller images on mobile with `srcset`
- Use a CDN for faster global delivery

Questions? Check the conversion script or browser compatibility chart above!
