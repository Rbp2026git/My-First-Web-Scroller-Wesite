#PROJECT: COMPLETE WEBSITE (HTML + CSS + JS)
<br>
<h3>Features: </h3>
<p>- Responsive Navbar</p>
<p>- Hero Section</p>
<p>- Services Section</p>
<p>- Contact Form (with validation)</p>
<p>Dark Mode Toggle</p>
<p>Author : Raushan Bhai Patel</p>

# 📜 Scroll Vista

A clean, responsive educational web platform featuring an auto-sliding image carousel, handwritten notes showcase, dark mode toggle, and smooth scroll navigation.

---

## 🚀 Features

- **Auto-Sliding Hero Carousel** — Automatically cycles through slides every 3 seconds with dot indicators and prev/next controls
- **Responsive Layout** — Carousel shows 3 slides on desktop and 1 slide on mobile (≤768px)
- **Dark Mode Toggle** — One-click light/dark theme switch via the 🌙 button
- **Smooth Scroll Navigation** — Nav links (Home, Notes, Contact) scroll smoothly to their sections
- **Notes Section** — Cards showcasing available handwritten notes (HTML, CSS, JS, Git, NPM)
- **Contact Form** — Simple form with name, email, and message fields
- **Footer** — Multi-column footer with Main, Learn, Social Media, Legal, and Support links

---

## 📁 Project Structure

```
scroll-vista/
│
├── index.html          # Main HTML structure
├── style.css           # Styling & responsive design
├── script.js           # Carousel logic, dark mode, scroll navigation
│
└── assets/
    ├── images/         # Slide images (local + picsum fallback)
    └── icons/          # SVG icons (profile, GitHub, YouTube)
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5      | Page structure & semantic layout |
| CSS3       | Styling, grid/flexbox layout, transitions |
| JavaScript (Vanilla) | Carousel, dark mode, smooth scroll |
| SVG        | Menu icon & social media icons |

---

## ⚙️ How It Works

### 🎠 Image Slider

- Slides are arranged in a flex row; `translateX` moves the strip on each tick.
- **Auto-slide** runs via `setInterval` (3000ms); manual button clicks call `resetAutoSlide()` to avoid double-speed scrolling.
- **Dot indicators** are generated dynamically — count = `totalSlides - visibleSlides + 1`.
- On window resize, `index` resets to `0` and dots are rebuilt to match the new visible count.

### 🌙 Dark Mode

- Toggling adds/removes the `.dark` class on `<body>`.
- Background and text color are handled entirely via CSS class swap — no JS style manipulation.

### 🔗 Smooth Scroll

- `scrollToSection(id)` calls `scrollIntoView({ behavior: "smooth" })` on the target section.
- Each nav button has a dedicated `addEventListener("click", ...)` binding.

---

## 📦 Setup & Usage

1. **Clone or download** this repository.
2. Place your own images inside `assets/images/` and update the `src` paths in `index.html` if needed.
3. Open `index.html` directly in any modern browser — **no build step required**.

```bash
# Optional: serve locally with VS Code Live Server or any static server
npx serve .
```

---

## 📱 Responsive Behavior

| Screen Width | Visible Slides | Layout Changes |
|---|---|---|
| > 768px | 3 slides at once | Full nav, grid footer |
| ≤ 768px | 1 slide at once | Cards stack vertically |

---

## 🔗 Social Links

- **GitHub:** [Rbp2026git](https://github.com/Rbp2026git)
- **YouTube:** [rbpMicrosoft](https://www.youtube.com/@rbpMicrosoft)

---

## 📄 License

This project is open source. Feel free to use and modify it for learning purposes.

---

> Made in India ❤️