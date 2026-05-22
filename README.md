# 📚 Scroll Vista
 
A Hindi-first, free educational web platform for students learning web development. Scroll Vista offers handwritten notes, video tutorials, structured courses, blog articles, and upcoming events — all in one place, completely free.
 
---
 
## 🌐 Live Preview
 
> Open `index.html` in any modern browser — no build step, no dependencies. 
---
 
## ✨ Features
 
- **SPA Navigation** — Smooth section switching without page reloads
- **Image Slider (Hero)** — Auto-advancing carousel with dot navigation, prev/next buttons, and responsive visible-slide count (3 on desktop, 1 on mobile)
- **Dark Mode** — One-click toggle with full dark theme across all sections
- **Popup Menu** — Grid-style app launcher with backdrop dismiss and keyboard (Escape) support
- **Tutorial Filter** — Filter video tutorials by category (HTML, CSS, JS, Git)
- **Responsive Design** — Mobile-friendly layout that adapts across all screen sizes
- **Footer Navigation** — Section-linked footer for quick access
---
 
## 🗂️ Project Structure
 
```
scroll-vista/
├── index.html          # Main HTML — all sections, header, footer
├── style.css           # All styling, dark mode, responsive rules
├── script.js           # SPA logic, slider, dark mode, popup, filters
└── assets/
    ├── images/         # Hero slider images
    └── icons/          # SVG icons (profile, GitHub, YouTube)
```

 
## 📄 Sections
 
| Section | ID | Description |
|---|---|---|
| Home | `section-home` | Hero slider, stats strip, featured courses, latest notes, CTA banner |
| Courses | `section-courses` | Course cards (Web Dev, Python, DSA, React) |
| Notes | `section-notes` | Handwritten notes cards (HTML, CSS, JS, Git, NPM) |
| Tutorials | `section-tutorials` | Filterable video tutorial cards |
| Blog | `section-blog` | Article cards with featured post |
| Events | `section-events` | Upcoming event list with date badges |
| Contact | `section-contact` | Contact form (name, email, message) |
---
 
## ⚙️ How It Works
 
### Section Switching (SPA)
All sections are hidden by default (`display: none`). Only the `.active` section is shown. `showSection(id)` swaps the active class and scrolls to top.
 
```js
function showSection(sectionId) {
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById("section-" + sectionId).classList.add("active");
}
```
 
### Hero Slider
- Calculates slide width dynamically from container size
- Shows 3 slides on desktop, 1 on mobile
- Auto-advances every 3 seconds; resets timer on manual navigation
- Dots are generated programmatically and update on slide change
### Dark Mode
Toggles the `dark` class on `<body>`. All dark-mode styles are scoped to `body.dark` in CSS.
---
 
## 🚀 Getting Started
 
1. Clone or download the repository
2. Place your own images inside `assets/images/`
3. Open `index.html` in a browser
```bash
git clone https://github.com/Rbp2026git/scroll-vista.git
cd scroll-vista
# Open index.html in browser
```
 
No npm install, no build tools — pure HTML, CSS, and JavaScript.
---
 
## 📱 Responsive Breakpoints
 
| Breakpoint | Changes |
|---|---|
| `≤ 768px` | 1 visible slide, single-column grids, stacked blog featured card, 2-column footer |
 
## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Grid, Flexbox, CSS variables, transitions, dark mode
- **Vanilla JavaScript** — No frameworks or libraries
 
## 🔗 Social
 
- **GitHub:** [Rbp2026git](https://github.com/Rbp2026git)
- **YouTube:** [@rbpMicrosoft](https://www.youtube.com/@rbpMicrosoft)
 
## 📝 License
 
Free to use for learning purposes. Made with ❤️ in India.
 