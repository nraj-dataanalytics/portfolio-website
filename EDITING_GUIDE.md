# 📝 Content Editing Guide

This guide will help you update all the content on your portfolio website easily.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Editing Personal Information](#editing-personal-information)
3. [Managing Portfolio Projects](#managing-portfolio-projects)
4. [Adding Blog Posts](#adding-blog-posts)
5. [Updating Certifications](#updating-certifications)
6. [Customizing News Ticker](#customizing-news-ticker)
7. [Changing Contact Information](#changing-contact-information)

---

## Quick Start

All editable content is centralized in: **`js/data.js`**

Open this file in any text editor and follow the sections below to make changes.

---

## Editing Personal Information

### Hero Section
**Location:** `index.html` (lines 42-57)

To change your name, tagline, or description:

```html
<h1 class="hero-name">Your Name Here</h1>
<h2 class="hero-subtitle">Your Title</h2>
<p class="hero-tagline">"Your tagline here"</p>
<p class="hero-secondary">Your credentials · Skills · Expertise</p>
```

### About Section
**Location:** `index.html` (lines 83-99)

Update the about text and add your photo:
- Replace the placeholder `<div class="image-placeholder">` with your image
- Edit the paragraphs to reflect your story

---

## Managing Portfolio Projects

**Location:** `js/data.js` (lines 6-80)

### Adding a New Project

Copy this template and add it to the `portfolioData` array:

```javascript
{
    id: 9, // Increment the ID
    title: "Your Project Title",
    category: "machine-learning", // Options: dashboards, machine-learning, sql, cloud
    description: "Brief description of your project and its impact.",
    tags: ["Python", "Tool1", "Tool2", "Tool3"],
    image: "", // Optional: URL to project image
    github: "https://github.com/yourusername/repo", // Or leave empty: ""
    demo: "https://your-demo-link.com" // Or leave empty: ""
}
```

### Editing Existing Projects

Find the project in `portfolioData` array and modify any field:
- `title`: Project name
- `category`: Filter category (must be: dashboards, machine-learning, sql, or cloud)
- `description`: Project description
- `tags`: Array of technologies used
- `github`: GitHub repository URL
- `demo`: Live demo URL

### Example:

```javascript
{
    id: 1,
    title: "NEW PROJECT NAME",
    category: "dashboards",
    description: "Updated description here.",
    tags: ["Tableau", "Python", "AWS"],
    image: "",
    github: "https://github.com/username/newrepo",
    demo: "https://demo.example.com"
}
```

---

## Adding Blog Posts

**Location:** `js/data.js` (lines 84-138)

### Creating a New Blog Post

Add this template to the `blogData` array:

```javascript
{
    id: 5, // Increment the ID
    title: "Your Blog Post Title",
    date: "2024-12-20", // Format: YYYY-MM-DD
    readingTime: "6 min",
    categories: ["Category1", "Category2"],
    excerpt: "Brief summary that appears on the blog cards.",
    image: "", // Optional
    slug: "url-friendly-title"
}
```

### Full Blog Post Content

Blog post details are in `blog-post.html`. To customize:

1. Open `blog-post.html`
2. Edit the content in the `<div id="post-body">` section
3. Add your headings, paragraphs, images, and code blocks

**For multiple unique blog posts**, you can either:
- Create separate HTML files: `blog-post-1.html`, `blog-post-2.html`, etc.
- Or use a content management system (CMS) like Contentful or Strapi

---

## Updating Certifications

**Location:** `js/data.js` (lines 142-183)

### Adding a Certification

```javascript
{
    id: 7, // Increment the ID
    title: "Certification Name",
    issuer: "Issuing Organization",
    image: "", // Optional: path to certificate image
    link: "" // Optional: verification link
}
```

### Example:

```javascript
{
    id: 7,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    image: "assets/certs/tensorflow-cert.png",
    link: "https://verify.example.com/12345"
}
```

---

## Customizing News Ticker

**Location:** `js/data.js` (lines 187-194)

### Adding/Editing Ticker Items

The news ticker shows rotating updates at the top of your homepage.

```javascript
const tickerItems = [
    { icon: "fa-star", text: "Your announcement here" },
    { icon: "fa-rocket", text: "Another update" },
    { icon: "fa-chart-line", text: "Recent achievement" }
];
```

**Icon Options** (from Font Awesome):
- `fa-star` - Star icon
- `fa-rocket` - Rocket icon
- `fa-chart-line` - Chart icon
- `fa-trophy` - Trophy icon
- `fa-fire` - Fire icon
- `fa-code` - Code icon
- `fa-lightbulb` - Lightbulb icon

Find more icons at: https://fontawesome.com/icons

---

## Changing Contact Information

### Social Media Links

**Locations to update:**
1. `index.html` - Contact section (lines 343-353)
2. Footer (lines 372-376)
3. `about.html` - Footer
4. `blog.html` - Footer

Replace `yourprofile` with your actual usernames:

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank">

<!-- GitHub -->
<a href="https://github.com/your-github-username" target="_blank">

<!-- Email -->
<a href="mailto:your.email@example.com">
```

### Contact Form Email

**Location:** `js/main.js` (lines 250-278)

To connect the contact form to your email:

**Option 1: EmailJS (Recommended - Free)**

1. Sign up at https://www.emailjs.com/
2. Get your Service ID, Template ID, and User ID
3. Add this code in `js/main.js`:

```javascript
emailjs.init('YOUR_USER_ID');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch((error) => {
            alert('Failed to send message.');
            console.error(error);
        });
});
```

**Option 2: Formspree**

1. Sign up at https://formspree.io/
2. Get your form endpoint
3. Change form action in `index.html`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## Resume & Work Experience

### Education & Experience

**Location:** `index.html` (lines 172-231)

Update your education:
```html
<span class="resume-date">2022 - 2024</span>
<h4>Your Degree</h4>
<p class="resume-location">Your University</p>
<p>Description of your studies...</p>
```

Update work experience:
```html
<span class="resume-date">2023 - Present</span>
<h4>Your Job Title</h4>
<p class="resume-location">Company Name</p>
<p>Description of your role and achievements...</p>
```

### Resume File

1. Save your resume as PDF: `assets/resume.pdf`
2. The download buttons will automatically link to it

---

## Client Work Section

**Location:** `index.html` (lines 323-375)

To add more client cards, copy this structure:

```html
<div class="work-card reveal-left">
    <div class="work-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Client Name</h3>
    <p class="work-role">Your Role</p>
    <div class="work-deliverables">
        <h4>Deliverables:</h4>
        <ul>
            <li>Deliverable 1</li>
            <li>Deliverable 2</li>
            <li>Deliverable 3</li>
        </ul>
    </div>
    <div class="work-tools">
        <span class="tool-tag">Tool1</span>
        <span class="tool-tag">Tool2</span>
        <span class="tool-tag">Tool3</span>
    </div>
</div>
```

---

## Technical Skills

**Location:** `index.html` (lines 239-285)

To update your skills, edit the skill tags:

```html
<div class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">R</span>
    <span class="skill-tag">NewSkill</span>
</div>
```

---

## Tips for Easy Editing

1. **Use a Code Editor**: VS Code, Sublime Text, or Atom make editing easier
2. **Preview Changes**: Open `index.html` in your browser after each edit
3. **Backup First**: Save a copy before making major changes
4. **Test Links**: Ensure all external links work correctly
5. **Validate HTML**: Use https://validator.w3.org/ to check for errors

---

## Need Help?

If you encounter issues:
1. Check the browser console for JavaScript errors (F12)
2. Validate your HTML at https://validator.w3.org/
3. Ensure all brackets `{}` and quotes `""` are properly closed
4. Review the file paths for images and links

---

**Happy Editing! 🚀**
