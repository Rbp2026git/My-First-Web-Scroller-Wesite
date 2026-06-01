/* ── Mobile Search Toggle ── */
const searchToggle = document.getElementById('searchToggle');
const mobileSearch = document.getElementById('mobileSearch');
const searchClose = document.getElementById('searchClose');

if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    mobileSearch.classList.toggle('open');
    if (mobileSearch.classList.contains('open')) {
      mobileSearch.querySelector('input').focus();
    }
  });
  searchClose.addEventListener('click', () => {
    mobileSearch.classList.remove('open');
  });
}


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
// window.addEventListener("resize", () => {
//      index = 0;
//      createDots();
//      updateSlider();
// });

/* INITIAL */
/* window.onload → ensure karta hai ki layout complete ho tab slider initialize ho */
window.addEventListener("load", () => {
    // createDots();
    // updateSlider();
    showSection("home"); // Default: home section
});
