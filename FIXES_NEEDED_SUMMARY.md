# Issues to Fix - Summary

## ✅ FIXED:
1. **Venture Work section** - Changed background to white (bg-white) to match screenshot
2. **All red section labels** - Centered with text-center class

## ⚠️ NEED YOUR INPUT:

### 1. Blog Section (3 posts)
Please provide for each blog post:
- **Title** (e.g., "The Future of Predictive Analytics in Retail")
- **Cover image URL**
- **Excerpt** (2-3 lines)
- **Date** (e.g., "December 14, 2024")
- **Reading time** (e.g., "8 min")
- **Categories** (e.g., ["Predictive Analytics", "Retail"])

### 2. Certifications
Please provide URLs for these certificate images:
- Hypothesis Testing in R (DataCamp) - Featured
- Learning Excel 2019 (LinkedIn Learning) - Featured
- Learning R (2019) (LinkedIn Learning) - Featured
- Speak English Professionally (Georgia Tech) - Featured
- Any additional certificates

Example format:
```
Certificate 1:
- Title: Hypothesis Testing in R
- Issuer: DataCamp
- Image URL: [provide URL]
- Date: December 2024
- Category: Statistics
- Featured: Yes
```

## 🔍 TO INVESTIGATE:

### Hero Section Text
- Need to check if text appears "dull" - may need CSS opacity adjustment
- Current text should be bright white on dark background

### Navbar Logo
- "Nandani Raj." should be visible in navbar
- Currently set as `<a href="#home" class="logo">Nandani Raj.</a>`

### Ticker Animation
- Ticker HTML exists but may not be animating
- JavaScript function `initializeTickerAnimation()` should be running
- Need to verify ticker data in js/data.js

## 📋 NEXT STEPS:

1. **You provide**: Blog post details + Certificate image URLs
2. **I will**: Add them to data.js and ensure they display correctly
3. **I will**: Fix any remaining hero/navbar/ticker issues

---

**Waiting for:**
- ✅ Blog post information (3 posts)
- ✅ Certificate image URLs (4+ certificates)
