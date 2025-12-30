# Haiyi Xing - Personal Website

Welcome to my personal website repository! This site showcases my work in AI/ML research and engineering.

## 🌐 Live Website

Visit: [https://stevenxing1.github.io](https://stevenxing1.github.io)

## 📋 About

This is a modern, responsive personal website featuring:
- Clean, professional design
- Smooth animations and transitions
- Mobile-friendly layout
- Sections for skills, education, experience, research, and publications
- Easy to update through `profile.js`

## 🛠️ Technologies Used

- HTML5
- CSS3 (with custom animations)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter)

## ✏️ How to Update Content

All content is managed through the `profile.js` file. Simply edit the `resumeData` object with your information:

```javascript
const resumeData = {
  name: "Your Name",
  contact: { ... },
  headline: "Your Headline",
  summary: [ ... ],
  skills: { ... },
  education: [ ... ],
  experience: [ ... ],
  research: [ ... ],
  publications: [ ... ],
  social: { ... }
};
```

The website will automatically update when you refresh the page.

## 📁 File Structure

```
.
├── index.html      # Main HTML structure
├── profile.js      # Data and rendering logic
└── README.md       # This file
```

## 🚀 Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Edit `profile.js` to update your information
4. Refresh the page to see changes

## 📄 License

© 2025 Haiyi Xing. All rights reserved.
