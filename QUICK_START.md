# 🚀 QUICK START GUIDE

## In 5 Minutes, Get Your Portfolio Live!

### Step 1: Personalize (2 minutes)
```
📝 Open: js/data.js
- Update portfolioData with your projects
- Update blogData with your articles
- Update certificationsData

📝 Open: index.html
- Find line 45: Change "Nandani Raj" to your name
- Find line 343: Update social media links
- Update about section text
```

### Step 2: Add Your Files (1 minute)
```
📁 assets/resume.pdf - Add your resume here
📁 Replace image placeholder in About section
```

### Step 3: Deploy to GitHub Pages (2 minutes)
```
1. Go to github.com → New Repository
2. Name it: yourusername.github.io
3. Upload all files
4. Settings → Pages → Deploy from main branch
5. Done! Live at: https://yourusername.github.io
```

---

## 📂 File Structure at a Glance

```
portfolio-website/
├── index.html          ← Main page (edit sections here)
├── about.html          ← About page
├── blog.html           ← Blog listing
├── blog-post.html      ← Blog post template
├── css/
│   └── style.css       ← Colors, fonts, styling
├── js/
│   ├── data.js         ← ✨ EDIT THIS for content
│   └── main.js         ← Interactive features
└── assets/
    └── resume.pdf      ← Add your resume
```

---

## 🎨 3 Things You'll Edit Most

### 1. Projects (js/data.js)
```javascript
{
    id: 1,
    title: "Your Project Name",
    category: "machine-learning",  // dashboards, sql, cloud
    description: "What did you build?",
    tags: ["Python", "TensorFlow"],
    github: "https://github.com/user/repo",
    demo: "https://demo.com"
}
```

### 2. Blog Posts (js/data.js)
```javascript
{
    id: 1,
    title: "Your Article Title",
    date: "2024-12-20",
    categories: ["Machine Learning"],
    excerpt: "Brief summary..."
}
```

### 3. Personal Info (index.html)
- Line 45: Your name
- Line 46: Your title
- Line 47: Your tagline
- Line 343-353: Social links

---

## 🔗 Important URLs

After deploying to GitHub Pages:

| Page | URL |
|------|-----|
| Homepage | `https://yourusername.github.io` |
| About | `https://yourusername.github.io/about.html` |
| Blog | `https://yourusername.github.io/blog.html` |

---

## 🎨 Change Colors (css/style.css, line 8-15)

**Default: Navy + Burgundy**
```css
--color-navy-dark: #0f172a;
--color-burgundy: #9f1239;
```

**Try: Blue + Gold**
```css
--color-navy-dark: #0a192f;
--color-burgundy: #ffd700;
```

**Try: Purple + Teal**
```css
--color-navy-dark: #1a1a2e;
--color-burgundy: #00fff5;
```

---

## 🐛 Quick Fixes

**Portfolio not showing?**
→ Check js/data.js syntax (missing comma?)

**Mobile menu stuck?**
→ Refresh page (Ctrl + Shift + R)

**Resume not downloading?**
→ Add resume.pdf to assets folder

**Colors look weird?**
→ Clear cache (Ctrl + Shift + Delete)

---

## 📧 Email Contact Form Setup (Optional)

### Using EmailJS (Free):
1. Sign up: https://emailjs.com
2. Get Service ID, Template ID, User ID
3. In js/main.js (line 260), add:
```javascript
emailjs.init('YOUR_USER_ID');
emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form);
```

### Using Formspree (Free):
1. Sign up: https://formspree.io
2. Get your form endpoint
3. In index.html, add to form tag:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## ✅ Pre-Launch Checklist

- [ ] Changed "Nandani Raj" to your name
- [ ] Updated all social media links
- [ ] Added your projects to js/data.js
- [ ] Uploaded resume.pdf to assets/
- [ ] Tested all navigation links
- [ ] Checked mobile responsive view
- [ ] Updated about section text
- [ ] Added your photo/image
- [ ] Tested on different browsers
- [ ] Ready to deploy! 🚀

---

## 🆘 Need More Help?

- **Full Documentation:** README.md
- **Content Editing:** EDITING_GUIDE.md
- **Asset Management:** assets/README.md

---

## 💡 Pro Tips

1. **Test locally first:** Open index.html in browser before deploying
2. **Use VS Code:** Best editor for web development
3. **Backup often:** Save copies before major changes
4. **Check console:** Press F12 to see errors
5. **Mobile first:** Always test on phone/tablet

---

**You're ready to launch! 🎉**

Deploy now → Share on LinkedIn → Land your dream job!
