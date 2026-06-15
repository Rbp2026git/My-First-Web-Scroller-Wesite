// /* ═════════════════════════════════════
//    PROJECTS — Dynamic Card Renderer
//    Data array + JS se cards generate hote hain
// ═══════════════════════════════════════ */
// /* 1. ================ DATA ============= */
// const projectsData = [
//     {
//         id: "p1",
//         tech: "html",
//         emoji: "🌐",
//         thumbGradient: "linear-gradient(135deg,#f97316,#ea580c)",
//         title: "Personal Portfolio Page",
//         desc: "Apna khud ka portfolio banana seekho — about, skills, aur projects section ke saath. Pure HTML se structure banao.",
//         difficulty: "⭐ Beginner",
//         url: "https://github.com/Rbp2026git/portfolio-page"
//     },
//     {
//         id: "p2",
//         tech: "html",
//         emoji: "📋",
//         thumbGradient: "linear-gradient(135deg,#fb923c,#f97316)",
//         title: "Registration Form",
//         desc: "Ek complete registration form banao — name, email, password, gender, aur terms checkbox ke saath. Semantic HTML practice.",
//         difficulty: "⭐ Beginner",
//         url: "https://github.com/Rbp2026git/registration-form"
//     },
//     {
//         id: "p3",
//         tech: "css",
//         emoji: "🎨",
//         thumbGradient: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
//         title: "Animated Loader",
//         desc: "Smooth CSS animations se ek stylish loading spinner banao — keyframes, transform aur opacity ka use karke.",
//         difficulty: "⭐ Beginner",
//         url: "https://github.com/Rbp2026git/animated-loader"
//     },
//     {
//         id: "p4",
//         tech: "css",
//         emoji: "🃏",
//         thumbGradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
//         title: "Glassmorphism Card UI",
//         desc: "Trendy glassmorphism effect ke saath ek beautiful profile card banao — backdrop-filter, blur aur transparency use karke.",
//         difficulty: "⭐⭐ Intermediate",
//         url: "https://github.com/Rbp2026git/glassmorphism-card"
//     },
//     {
//         id: "p5",
//         tech: "js",
//         emoji: "🧮",
//         thumbGradient: "linear-gradient(135deg,#eab308,#ca8a04)",
//         title: "Calculator App",
//         desc: "Fully functional calculator banao — basic aur scientific operations ke saath. DOM manipulation aur event handling seekho.",
//         difficulty: "⭐⭐ Intermediate",
//         url: "https://github.com/Rbp2026git/calculator-app"
//     },
//     {
//         id: "p6",
//         tech: "js",
//         emoji: "🌤️",
//         thumbGradient: "linear-gradient(135deg,#f59e0b,#d97706)",
//         title: "Weather App",
//         desc: "OpenWeather API se real-time weather data fetch karo. Fetch API, JSON parsing aur async/await practice ke liye perfect.",
//         difficulty: "⭐⭐ Intermediate",
//         url: "https://github.com/Rbp2026git/weather-app"
//     },
//     {
//         id: "p7",
//         tech: "js",
//         emoji: "🎵",
//         thumbGradient: "linear-gradient(135deg,#ec4899,#be185d)",
//         title: "Music Player",
//         desc: "Custom HTML5 audio player banao — play/pause, progress bar, aur next/prev controls ke saath. JS Audio API ka practice.",
//         difficulty: "⭐⭐⭐ Advanced",
//         url: "https://github.com/Rbp2026git/music-player"
//     },
//     {
//         id: "p8",
//         tech: "react",
//         emoji: "✅",
//         thumbGradient: "linear-gradient(135deg,#0ea5e9,#0284c7)",
//         title: "Todo List App",
//         desc: "useState hook se ek fully functional todo app banao — add, complete, aur delete tasks. React basics ke liye best starting project.",
//         difficulty: "⭐ Beginner",
//         url: "https://github.com/Rbp2026git/todo-app-react"
//     },
//     {
//         id: "p9",
//         tech: "react",
//         emoji: "🛒",
//         thumbGradient: "linear-gradient(135deg,#06b6d4,#0891b2)",
//         title: "Shopping Cart",
//         desc: "useReducer aur Context API se ek mini e-commerce cart banao — add to cart, quantity update, aur total price calculation.",
//         difficulty: "⭐⭐⭐ Advanced",
//         url: "https://github.com/Rbp2026git/shopping-cart-react"
//     }
// ];
 
// /* ── Single card ka HTML generate karo ── */
// function createProjectCard(project) {
//     const card = document.createElement("div");
//     card.className = "project-card";
//     card.dataset.tech    = project.tech;
//     card.dataset.projId  = project.id;
//     card.dataset.url     = project.url;
 
//     card.innerHTML = `
//         <div class="proj-thumb" style="background:${project.thumbGradient};">
//             ${project.emoji}
//             <button class="proj-star-btn" aria-label="Star this project">☆</button>
//         </div>
//         <div class="proj-card-body">
//             <span class="proj-tech-badge ${project.tech}">${project.tech.toUpperCase()}</span>
//             <h3>${project.title}</h3>
//             <p>${project.desc}</p>
//             <div class="proj-card-footer">
//                 <span class="proj-difficulty">${project.difficulty}</span>
//                 <button class="proj-open-btn">View Project →</button>
//             </div>
//         </div>
//     `;
 
//     /* ── Star button ── */
//     const starBtn = card.querySelector(".proj-star-btn");
//     starBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
 
//         if (starredProjects.has(project.id)) {
//             starredProjects.delete(project.id);
//             this.classList.remove("starred");
//             this.textContent = "☆";
//             this.setAttribute("aria-label", "Star this project");
//         } else {
//             starredProjects.add(project.id);
//             this.classList.add("starred");
//             this.textContent = "★";
//             this.setAttribute("aria-label", "Unstar this project");
//         }
 
//         /* pop animation */
//         this.classList.remove("pop");
//         void this.offsetWidth;
//         this.classList.add("pop");
 
//         updateStarCount();
//         if (showingStarred) renderProjCards("all");
//     });
 
//     /* ── View Project → GitHub ── */
//     const openBtn = card.querySelector(".proj-open-btn");
//     openBtn.addEventListener("click", function () {
//         if (project.url) window.open(project.url, "_blank", "noopener,noreferrer");
//     });
 
//     return card;
// }
 
// /* ── Sab cards grid mein inject karo ── */
// function renderAllProjectCards() {
//     const grid = document.getElementById("projectsGrid");
//     if (!grid) return;
 
//     grid.innerHTML = ""; // clear
//     projectsData.forEach(project => {
//         grid.appendChild(createProjectCard(project));
//     });
// }
 
// /* ── Page load pe render karo ── */
// document.addEventListener("DOMContentLoaded", renderAllProjectCards);
 

/* ═══════════════════════════════════════
   PROJECTS — Saara logic yahan hai
   1. Data array
   2. Card renderer
   3. Filter system
   4. Star system
═══════════════════════════════════════ */
 
/* ════ 1. DATA ════ */
const projectsData = [
    {
        id: "p1",
        tech: "html",
        emoji: "🌐",
        thumbGradient: "linear-gradient(135deg,#f97316,#ea580c)",
        title: "Personal Portfolio Page",
        desc: "Apna khud ka portfolio banana seekho — about, skills, aur projects section ke saath. Pure HTML se structure banao.",
        difficulty: "⭐ Beginner",
        url: "https://github.com/Rbp2026git/portfolio-page"
    },
    {
        id: "p2",
        tech: "html",
        emoji: "📋",
        thumbGradient: "linear-gradient(135deg,#fb923c,#f97316)",
        title: "Registration Form",
        desc: "Ek complete registration form banao — name, email, password, gender, aur terms checkbox ke saath. Semantic HTML practice.",
        difficulty: "⭐ Beginner",
        url: "https://github.com/Rbp2026git/registration-form"
    },
    {
        id: "p3",
        tech: "css",
        emoji: "🎨",
        thumbGradient: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
        title: "Animated Loader",
        desc: "Smooth CSS animations se ek stylish loading spinner banao — keyframes, transform aur opacity ka use karke.",
        difficulty: "⭐ Beginner",
        url: "https://github.com/Rbp2026git/animated-loader"
    },
    {
        id: "p4",
        tech: "css",
        emoji: "🃏",
        thumbGradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
        title: "Glassmorphism Card UI",
        desc: "Trendy glassmorphism effect ke saath ek beautiful profile card banao — backdrop-filter, blur aur transparency use karke.",
        difficulty: "⭐⭐ Intermediate",
        url: "https://github.com/Rbp2026git/glassmorphism-card"
    },
    {
        id: "p5",
        tech: "js",
        emoji: "🧮",
        thumbGradient: "linear-gradient(135deg,#eab308,#ca8a04)",
        title: "Calculator App",
        desc: "Fully functional calculator banao — basic aur scientific operations ke saath. DOM manipulation aur event handling seekho.",
        difficulty: "⭐⭐ Intermediate",
        url: "https://github.com/Rbp2026git/calculator-app"
    },
    {
        id: "p6",
        tech: "js",
        emoji: "🌤️",
        thumbGradient: "linear-gradient(135deg,#f59e0b,#d97706)",
        title: "Weather App",
        desc: "OpenWeather API se real-time weather data fetch karo. Fetch API, JSON parsing aur async/await practice ke liye perfect.",
        difficulty: "⭐⭐ Intermediate",
        url: "https://github.com/Rbp2026git/weather-app"
    },
    {
        id: "p7",
        tech: "js",
        emoji: "🎵",
        thumbGradient: "linear-gradient(135deg,#ec4899,#be185d)",
        title: "Music Player",
        desc: "Custom HTML5 audio player banao — play/pause, progress bar, aur next/prev controls ke saath. JS Audio API ka practice.",
        difficulty: "⭐⭐⭐ Advanced",
        url: "https://github.com/Rbp2026git/music-player"
    },
    {
        id: "p8",
        tech: "react",
        emoji: "✅",
        thumbGradient: "linear-gradient(135deg,#0ea5e9,#0284c7)",
        title: "Todo List App",
        desc: "useState hook se ek fully functional todo app banao — add, complete, aur delete tasks. React basics ke liye best starting project.",
        difficulty: "⭐ Beginner",
        url: "https://github.com/Rbp2026git/todo-app-react"
    },
    {
        id: "p9",
        tech: "react",
        emoji: "🛒",
        thumbGradient: "linear-gradient(135deg,#06b6d4,#0891b2)",
        title: "Shopping Cart",
        desc: "useReducer aur Context API se ek mini e-commerce cart banao — add to cart, quantity update, aur total price calculation.",
        difficulty: "⭐⭐⭐ Advanced",
        url: "https://github.com/Rbp2026git/shopping-cart-react"
    }
];
 
/* ════ 2. STAR STATE ════ */
const starredProjects = new Set();
let showingStarred    = false;
 
/* ════ 3. CARD RENDERER ════ */
/* ── Single card ka HTML generate karo ── */
function createProjectCard(project) {
    const card = document.createElement("div");
    card.className        = "project-card";
    card.dataset.tech     = project.tech;
    card.dataset.projId   = project.id;
 
    card.innerHTML = `
        <div class="proj-thumb" style="background:${project.thumbGradient};">
            ${project.emoji}
            <button class="proj-star-btn" aria-label="Star this project">☆</button>
        </div>
        <div class="proj-card-body">
            <span class="proj-tech-badge ${project.tech}">${project.tech.toUpperCase()}</span>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="proj-card-footer">
                <span class="proj-difficulty">${project.difficulty}</span>
                <button class="proj-open-btn">View Project →</button>
            </div>
        </div>
    `;
 
    /* Star button */
    card.querySelector(".proj-star-btn").addEventListener("click", function (e) {
        e.stopPropagation();
 
        if (starredProjects.has(project.id)) {
            starredProjects.delete(project.id);
            this.classList.remove("starred");
            this.textContent = "☆";
            this.setAttribute("aria-label", "Star this project");
        } else {
            starredProjects.add(project.id);
            this.classList.add("starred");
            this.textContent = "★";
            this.setAttribute("aria-label", "Unstar this project");
        }
        /* pop animation */
        this.classList.remove("pop");
        void this.offsetWidth;
        this.classList.add("pop");
 
        updateStarCount();
        if (showingStarred) renderProjCards("all");
    });
 
    /* View Project → GitHub */
    card.querySelector(".proj-open-btn").addEventListener("click", () => {
        if (project.url) window.open(project.url, "_blank", "noopener,noreferrer");
    });
 
    return card;
}
/* ── Sab cards grid mein inject karo ── */
function renderAllProjectCards() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    projectsData.forEach(project => grid.appendChild(createProjectCard(project)));
}
 
/* ════ 4. FILTER ════ */
function applyProjFilter(filter) {
    if (filter !== "__starred__") {
        showingStarred = false;
        const starBtn = document.getElementById("starredToggleBtn");
        if (starBtn) starBtn.classList.remove("active");
    }
 
    document.querySelectorAll(".proj-filter-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.filter === filter);
    });
 
    renderProjCards(filter);
}
 
function renderProjCards(filter) {
    const cards = document.querySelectorAll(".project-card");
    let visibleCount = 0;
 
    cards.forEach(card => {
        const techMatch = (filter === "all" || filter === "__starred__" || card.dataset.tech === filter);
        const starMatch = (!showingStarred || starredProjects.has(card.dataset.projId));
        const show      = techMatch && starMatch;
        card.style.display = show ? "" : "none";
        if (show) visibleCount++;
    });
 
    const empty = document.getElementById("projEmpty");
    if (empty) empty.classList.toggle("visible", visibleCount === 0);
}
 
/* ════ 5. STAR COUNT BADGE ════ */
function updateStarCount() {
    const badge = document.getElementById("starCount");
    if (!badge) return;
    const n = starredProjects.size;
    badge.textContent  = n > 0 ? n : "";
    badge.style.display = n > 0 ? "inline-flex" : "none";
}
 
/* ════ 6. EVENT LISTENERS ════ */
document.addEventListener("DOMContentLoaded", () => {
    /* Cards render karo */
    renderAllProjectCards();
 
    /* Tech filter buttons */
    document.querySelectorAll(".proj-filter-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            applyProjFilter(this.dataset.filter);
        });
    });
 
    /* Starred toggle */
    const starredToggleBtn = document.getElementById("starredToggleBtn");
    if (starredToggleBtn) {
        starredToggleBtn.addEventListener("click", function () {
            showingStarred = !showingStarred;
            this.classList.toggle("active", showingStarred);
 
            if (showingStarred) {
                document.querySelectorAll(".proj-filter-btn").forEach(b => {
                    b.classList.toggle("active", b.dataset.filter === "all");
                });
            }
            renderProjCards("all");
        });
    }
});
 
