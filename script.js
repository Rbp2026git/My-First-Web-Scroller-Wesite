/* ============== SECTION SWITCHING (SPA) =============== */

// Sabhi sections ko ek object mein map karo
const sections = document.querySelectorAll(".page-section");
const navItems = document.querySelectorAll(".nav-item");

/**
# Kisi bhi section ko show karo, baaki hide karo.
# @param {string} sectionId - e.g. "home", "notes", "contact"
*/
function showSection(sectionId) {
    // Sabhi sections hide karo
    sections.forEach(sec => sec.classList.remove("active"));

    // Target section dikhao
    const target = document.getElementById("section-" + sectionId);
    if (target) {
        target.classList.add("active");
        // Smooth scroll to top of page
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Nav active state update karo
    navItems.forEach(item => {
        item.classList.remove("active-nav");
        if (item.dataset.section === sectionId) {
            item.classList.add("active-nav");
        }
    });
}
// Lower nav items pe click listener
navItems.forEach(item => {
    item.addEventListener("click", function () {
        showSection(this.dataset.section);
    });
});
/* ============== SECTION SWITCHING (SPA) ends here =============== */

/* ============ Popup - Section ==================== */
// Popup app-tiles pe click listener
document.querySelectorAll("[data-section]").forEach(el => {
    el.addEventListener("click", function (e) {
        const sec = this.dataset.section;
        if (sec) {
            e.preventDefault();
            showSection(sec);
            closePopup(); // popup band karo
        }
    });
});

/* ===================== Footer Section ==================== */
/* Footer links pe bhi section switching */
document.querySelectorAll(".footer a[data-section]").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(this.dataset.section);
    });
});

/* Home quick-buttons - Hero ke neeche welcome content */
document.querySelectorAll(".quick-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        showSection(this.dataset.section);
    });
});

/* =============== Logo click → home =============== */
document.getElementById("vista").addEventListener("click", () => {
    showSection("home");
});

/* ============= DARK MODE =============== */
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
})

/* =========== POPUP MENU =============== */
const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("popup");
const backdrop = document.getElementById("backdrop");
const popupClose = document.getElementById("popupClose");

menuBtn.addEventListener("click", (e)=>{
    e.stopPropagation();

    const isOpen = popup.classList.toggle('open');
    backdrop.classList.toggle('open', isOpen);
})

function closePopup() {
    popup.classList.remove('open');
    backdrop.classList.remove('open');
}
popupClose.addEventListener("click", closePopup);
backdrop.addEventListener("click", closePopup);

document.addEventListener("keydown", (e) =>{
    if(e.key === 'Escape'){
        closePopup();
    }
})

/*form this line , we are working on hero section */
/* ==============IMAGE SLIDER (Hero) ============== */
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;
/* ------------ HOW MANY SLIDES VISIBLE ----------- */
function getVisibleSlides(){
    return window.innerWidth <= 768 ? 1 : 3;
}

/*Create DOTS */
function createDots(){
    dotsContainer.innerHTML = "";

    let totalDots = slides.length - getVisibleSlides() + 1;

    for(let i = 0; i < totalDots; i++){

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if(i === index){
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
            index = i;
            updateSlider();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

/* Calculate from Container Width */
function getSlideWidth(){

    const container = document.querySelector(".slider-container");
    const containerWidth = container.clientWidth - 32; //16px padding dono side
    const visible = getVisibleSlides();
    const slideW = (containerWidth - (visible - 1) * 16) / visible;
    return slideW + 16; //slide + gap
}

/* ------------------ UPDATE SLIDER ---------------- */
function updateSlider(){

    let visibleSlides = getVisibleSlides();

    let slideWidth = getSlideWidth();
    // let slideWidth = slides[0].offsetWidth + 16; // older

    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

/* --------------- NEXT & PREV button in Slider ----------- */
function nextSlide(){

    let maxIndex = slides.length - getVisibleSlides();
    index++;
    if(index > maxIndex){ index = 0; }
    updateSlider();
}
function prevSlide(){

    let maxIndex = slides.length - getVisibleSlides();
    index--;
    if(index < 0){ index = maxIndex; }
    updateSlider();
}
/*Storing 0f  in variable */
let autoSlide = setInterval(nextSlide, 3000);
/* reset Auto Slide = Ye function banao — reset ke liye */
function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}
/* BUTTON EVENT mein resetAutoSlide call karo */
nextBtn.addEventListener("click", ()=>{
    nextSlide();
    resetAutoSlide();
});
prevBtn.addEventListener("click", ()=>{
    prevSlide();
    resetAutoSlide();
});

/* ════════════════HOME SECTION — EXTRA JS ═════════════════════ */
/* Featured Course "Free Join Karen" buttons */
document.querySelectorAll(".feat-enroll-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        showSection(this.dataset.section);
    });
});
/* CTA Banner buttons */
document.querySelectorAll(".cta-primary-btn, .cta-secondary-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        showSection(this.dataset.section);
    });
});

// ════════════════════════════════════════
//  TUTORIALS FILTER
// ════════════════════════════════════════
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll(".tutorial-card").forEach(card => {
            const match = filter === "all" || card.dataset.category === filter;
            card.style.display = match ? "" : "none";
        });
    });
});

/* ------------------ RESPONSIVE ------------------- */
window.addEventListener("resize", () => {
     index = 0;
     createDots();
     updateSlider();
});

/* INITIAL */
/* window.onload → ensure karta hai ki layout complete ho tab slider initialize ho */
window.addEventListener("load", () => {
    createDots();
    updateSlider();
    showSection("home"); // Default: home section
});
