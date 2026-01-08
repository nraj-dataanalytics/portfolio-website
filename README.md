# 🌟 Nandani Raj - Premium Portfolio Website

A modern, luxurious, and minimal dark-theme portfolio website designed for data science and analytics professionals. Built with clean HTML, CSS, and JavaScript featuring elegant animations, smooth scrolling, and a responsive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Project Structure](#-project-structure)
3. [Currently Implemented](#-currently-implemented)
4. [Getting Started](#-getting-started)
5. [How to Edit Content](#-how-to-edit-content)
6. [Deployment Instructions](#-deployment-instructions)
7. [Customization Guide](#-customization-guide)
8. [Future Enhancements](#-future-enhancements)
9. [Browser Support](#-browser-support)
10. [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### Design & Aesthetics
- ✅ **Premium Dark Theme**: Navy + Burgundy + Soft White color palette
- ✅ **Elegant Typography**: Playfair Display (serif) + Inter (sans-serif)
- ✅ **Smooth Animations**: Fade-in effects, scroll reveals, hover transitions
- ✅ **Floating Particles**: Dynamic background animation in hero section
- ✅ **Gradient Overlays**: Sophisticated color gradients throughout
- ✅ **Card Shadows & Glow**: Premium depth effects on interactive elements

### Functionality
- ✅ **Sticky Navigation**: Fixed navbar with scroll effects
- ✅ **Mobile Responsive**: Hamburger menu and responsive layouts
- ✅ **Smooth Scrolling**: Seamless navigation between sections
- ✅ **Portfolio Filtering**: Filter projects by category (All, Dashboards, ML, SQL, Cloud)
- ✅ **News Ticker**: Auto-scrolling updates banner
- ✅ **Contact Form**: Ready for email API integration
- ✅ **Scroll-to-Top**: Floating button for easy navigation
- ✅ **Dynamic Content**: Portfolio, blog, and certifications loaded from data file

### Sections Included
1. **Hero Section** - Name, tagline, CTA buttons, animated background
2. **News Ticker** - Latest updates and announcements
3. **About Me** - Personal introduction with image placeholder
4. **Core Competencies** - 6 skill cards with icons
5. **Resume** - Education and experience timeline
6. **Technical Skills** - Categorized skill badges
7. **Portfolio** - Filterable project showcase
8. **Client Work** - Tirani and The Foxnut Farm collaborations
9. **Blog** - Recent articles with full blog page
10. **Certifications** - Professional credentials
11. **Contact** - Form and social media links
12. **Footer** - Links and copyright

---

## 📁 Project Structure

```
portfolio-website/
│
├── index.html              # Main homepage
├── about.html              # Detailed about page
├── blog.html               # Blog listing page
├── blog-post.html          # Individual blog post template
│
├── css/
│   └── style.css           # Main stylesheet (premium dark theme)
│
├── js/
│   ├── data.js             # Content data (easily editable)
│   └── main.js             # Interactive functionality
│
├── assets/
│   ├── README.md           # Asset instructions
│   └── resume.pdf          # Your resume (add your file here)
│
├── README.md               # This file
└── EDITING_GUIDE.md        # Comprehensive content editing guide
```

---

## ✅ Currently Implemented

### Functional Entry Points

| Page | URI | Description |
|------|-----|-------------|
| **Homepage** | `index.html` | Main landing page with all sections |
| **About** | `about.html` | Detailed personal story and approach |
| **Blog Listing** | `blog.html` | All blog posts |
| **Blog Post** | `blog-post.html?id=X` | Individual blog article (template) |

### Data Models

All content is managed through **`js/data.js`**:

```javascript
// Portfolio Projects
portfolioData = [
    {
        id: Number,
        title: String,
        category: String, // dashboards, machine-learning, sql, cloud
        description: String,
        tags: Array,
        image: String,
        github: String,
        demo: String
    }
]

// Blog Posts
blogData = [
    {
        id: Number,
        title: String,
        date: String, // YYYY-MM-DD
        readingTime: String,
        categories: Array,
        excerpt: String,
        image: String,
        slug: String
    }
]

// Certifications
certificationsData = [
    {
        id: Number,
        title: String,
        issuer: String,
        image: String,
        link: String
    }
]

// News Ticker
tickerItems = [
    {
        icon: String, // Font Awesome icon class
        text: String
    }
]
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, Atom)
- Basic knowledge of HTML/CSS/JavaScript (helpful but not required)

### Quick Start

1. **Download the project**
   ```bash
   # If using Git
   git clone <repository-url>
   
   # Or download as ZIP and extract
   ```

2. **Open the website**
   - Double-click `index.html` to open in your browser
   - Or use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
   Then visit `http://localhost:8000`

3. **Start editing**
   - See [EDITING_GUIDE.md](EDITING_GUIDE.md) for detailed instructions
   - Edit content in `js/data.js`
   - Add your resume to `assets/resume.pdf`

---

## 📝 How to Edit Content

### Quick Edits

**Change your name and title:**
- Open `index.html`
- Find the hero section (around line 45)
- Edit the text between the HTML tags

**Update portfolio projects:**
- Open `js/data.js`
- Modify the `portfolioData` array
- Add, remove, or edit project objects

**Add blog posts:**
- Open `js/data.js`
- Add new entries to `blogData` array
- Create content in `blog-post.html`

### Detailed Guide

For comprehensive editing instructions, see **[EDITING_GUIDE.md](EDITING_GUIDE.md)**

This guide covers:
- Personal information updates
- Portfolio project management
- Blog post creation
- Certification updates
- Contact information changes
- And much more!

---

## 🌐 Deployment Instructions

### Option 1: GitHub Pages (Recommended - FREE)

GitHub Pages is the easiest way to deploy your portfolio for free.

#### Step-by-Step:

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it: `your-username.github.io` (replace `your-username` with your GitHub username)
   - Make it Public
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop ALL your portfolio files
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click "Save"

5. **Access your website**
   - Your site will be live at: `https://your-username.github.io`
   - Wait 2-3 minutes for the first deployment

#### Update Your Live Site:
- Edit files directly on GitHub, or
- Use GitHub Desktop app, or
- Use Git command line:
  ```bash
  git add .
  git commit -m "Updated content"
  git push
  ```

---

### Option 2: Netlify (Alternative - FREE)

1. **Sign up at** https://www.netlify.com
2. **Drag and drop** your project folder
3. **Your site is live!** You'll get a URL like `random-name.netlify.app`
4. **Custom domain** (optional): Follow Netlify's instructions

**To update:**
- Drag and drop new files to redeploy

---

### Option 3: Vercel (Alternative - FREE)

1. **Sign up at** https://vercel.com
2. **Import your GitHub repository**
3. **Deploy** - Vercel auto-deploys on every commit
4. **Access** your live site at `project-name.vercel.app`

---

### Custom Domain Setup

After deploying, you can connect a custom domain (e.g., `nandaniraj.com`):

#### GitHub Pages:
1. Buy domain from Namecheap, GoDaddy, or Google Domains
2. In repository settings → Pages → Custom domain
3. Add your domain name
4. Configure DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

#### Netlify/Vercel:
1. Go to Domain Settings in dashboard
2. Follow the provided DNS instructions
3. Usually just update nameservers

---

## 🎨 Customization Guide

### Change Color Scheme

**Location:** `css/style.css` (lines 8-23)

```css
:root {
    /* Change these colors */
    --color-navy-dark: #0f172a;      /* Main background */
    --color-burgundy: #9f1239;        /* Accent color */
    --color-white: #f8fafc;           /* Text color */
}
```

**Popular Alternative Palettes:**

**Blue & Gold:**
```css
--color-navy-dark: #0a192f;
--color-burgundy: #ffd700;
--color-white: #e6f1ff;
```

**Purple & Teal:**
```css
--color-navy-dark: #1a1a2e;
--color-burgundy: #16213e;
--color-accent: #0f3460;
--color-highlight: #00fff5;
```

### Change Fonts

**Location:** `index.html` (line 10-12) and `css/style.css` (line 24-25)

Current fonts:
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

To change:
1. Visit Google Fonts: https://fonts.google.com
2. Select your fonts
3. Replace the `<link>` tag in HTML
4. Update CSS variables:
```css
--font-serif: 'Your-Serif-Font', serif;
--font-sans: 'Your-Sans-Font', sans-serif;
```

### Adjust Animations

**Location:** `css/style.css`

Speed up/slow down animations:
```css
--transition-fast: 0.2s ease;    /* Change duration */
--transition-medium: 0.3s ease;
--transition-slow: 0.5s ease;
```

Disable all animations:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

---

## 🔮 Future Enhancements

### Not Yet Implemented (You Can Add):

1. **✨ GitHub Repos Auto-Import**
   - Automatically fetch your latest repositories
   - Code is ready in `js/main.js` (line 329)
   - Just uncomment and add your GitHub username

2. **📧 Email API Integration**
   - Connect contact form to your email
   - Recommended: EmailJS or Formspree
   - Instructions in EDITING_GUIDE.md

3. **📊 Blog CMS**
   - Integrate with Contentful, Strapi, or Ghost
   - Manage blog posts without editing code

4. **🔍 Search Functionality**
   - Add search bar for portfolio and blog

5. **🌍 Multi-language Support**
   - Add language switcher
   - Create translations

6. **📈 Analytics Integration**
   - Add Google Analytics
   - Track visitor behavior

7. **🎭 Dark/Light Mode Toggle**
   - Add theme switcher button
   - Save user preference

8. **💬 Comments System**
   - Add Disqus or Utterances to blog posts

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |
| Mobile Safari | iOS 12+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |

---

## 🐛 Troubleshooting

### Common Issues

**Problem: Portfolio items not showing**
- **Solution:** Check `js/data.js` for syntax errors
- Ensure all brackets `{}` and commas are correct
- Open browser console (F12) to see errors

**Problem: Animations not working**
- **Solution:** Clear browser cache (Ctrl+Shift+R)
- Check if JavaScript is enabled
- Try a different browser

**Problem: Mobile menu not opening**
- **Solution:** Check if `js/main.js` is loaded
- Look for JavaScript errors in console
- Verify hamburger ID matches in HTML and JS

**Problem: Contact form not working**
- **Solution:** Form is a template - needs email API integration
- Follow instructions in EDITING_GUIDE.md
- Set up EmailJS or Formspree

**Problem: Resume download not working**
- **Solution:** Add your `resume.pdf` to the `assets/` folder
- Check file name matches exactly: `resume.pdf`

### How to Debug

1. **Open Developer Tools** (F12 or Right-click → Inspect)
2. **Check Console tab** for JavaScript errors
3. **Check Network tab** to see if files are loading
4. **Use Elements tab** to inspect HTML structure

---

## 📊 Performance Optimization

The website is already optimized with:
- ✅ Minimal dependencies (only Font Awesome and Google Fonts)
- ✅ Lazy loading for images
- ✅ Debounced scroll events
- ✅ CSS animations (GPU accelerated)
- ✅ Clean, semantic HTML
- ✅ Optimized CSS selectors

### Further Optimization (Optional):

1. **Minify CSS and JavaScript**
   ```bash
   # Using npm packages
   npm install -g clean-css-cli uglify-js
   cleancss -o css/style.min.css css/style.css
   uglifyjs js/main.js -o js/main.min.js
   ```

2. **Compress images** using TinyPNG or ImageOptim

3. **Use CDN** for better global performance (already using jsDelivr for libraries)

---

## 📞 Support & Contact

### Questions?

- **Technical Issues:** Check the Troubleshooting section above
- **Content Editing:** See EDITING_GUIDE.md
- **Deployment Help:** Follow the step-by-step deployment instructions

### Resources

- **Font Awesome Icons:** https://fontawesome.com/icons
- **Google Fonts:** https://fonts.google.com
- **HTML Validator:** https://validator.w3.org
- **CSS Validator:** https://jigsaw.w3.org/css-validator
- **GitHub Pages Guide:** https://pages.github.com

---

## 📜 License

This portfolio template is free to use for personal projects. Feel free to customize it to match your brand and style.

---

## 🎯 Next Steps

1. ✅ **Personalize Content**
   - Edit `js/data.js` with your projects and information
   - Update all sections in `index.html`

2. ✅ **Add Your Assets**
   - Place your resume: `assets/resume.pdf`
   - Add your photo to the about section
   - Add project screenshots

3. ✅ **Update Social Links**
   - Replace all `yourprofile` placeholders
   - Add your LinkedIn, GitHub, email

4. ✅ **Test Everything**
   - Check all links work
   - Test on mobile devices
   - Verify contact form (after email integration)

5. ✅ **Deploy**
   - Follow GitHub Pages instructions above
   - Share your portfolio with the world!

6. ✅ **Optional Enhancements**
   - Set up email integration
   - Add Google Analytics
   - Connect custom domain

---

## 🙏 Acknowledgments

Built with:
- **Fonts:** Google Fonts (Playfair Display, Inter)
- **Icons:** Font Awesome
- **Inspiration:** Modern data science portfolios

---

**Ready to launch your career? Deploy your portfolio today! 🚀**

For detailed editing instructions, see [EDITING_GUIDE.md](EDITING_GUIDE.md)
