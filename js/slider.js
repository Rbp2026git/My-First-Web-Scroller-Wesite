const SLIDES = [
    { tag: "Nature", title: "Into the Misty Forest", desc: "A journey through fog and silence", grad: "linear-gradient(135deg,#1a3a2a,#2d6a4f)" },
    { tag: "Ocean", title: "Deep Blue Horizon", desc: "Where sky meets the endless sea", grad: "linear-gradient(135deg,#0a1f44,#1565c0)" },
    { tag: "Desert", title: "Golden Dunes at Dusk", desc: "Sand & silence in perfect harmony", grad: "linear-gradient(135deg,#4a2c0a,#c77c2a)" },
    { tag: "City", title: "Neon Nights, Urban Dreams", desc: "The city pulses with electric life", grad: "linear-gradient(135deg,#12001f,#6a0572)" },
    { tag: "Mountain", title: "Above the Clouds", desc: "Peaks that touch the heavens", grad: "linear-gradient(135deg,#1c2e40,#4a6fa5)" },
    { tag: "Sunset", title: "Crimson Farewell", desc: "Day bids the world goodbye in fire", grad: "linear-gradient(135deg,#3d0a0a,#c0392b)" },
    { tag: "Arctic", title: "Aurora Whispers", desc: "Lights dance across the frozen sky", grad: "linear-gradient(135deg,#001a2e,#00796b)" },
];

const N = SLIDES.length;
const COPIES = 5;           // total copies of the full slide set in the DOM
const MID_COPY = 2;           // which copy index (0-based) is the "middle" one we start at
const GAP = 24;

const track = document.getElementById('track');
const dotsWrap = document.getElementById('dots');

let vc = 3;          // visible cards at once
let cardW = 0;
let activeReal = 0;          // 0…N-1  dot indicator
// trackPos = absolute index into the full cloned array (0 … COPIES*N - 1)
let trackPos = MID_COPY * N;  // starts at first slide of middle copy
let busy = false;

/* ── visible count ── */
function getVC() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

/* ── make one card ── */
function makeCard(s) {
    const d = document.createElement('div');
    d.className = 'slide-card';
    d.innerHTML = `<div class="bg" style="background:${s.grad}"></div>
      <div class="overlay"></div>
      <div class="content">
        <span class="tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`;
    return d;
}

/* ── build track: COPIES full sets ── */
function buildTrack() {
    track.innerHTML = '';
    for (let c = 0; c < COPIES; c++) {
        SLIDES.forEach(s => track.appendChild(makeCard(s)));
    }
}

/* ── set card widths ── */
function setCardWidths() {
    vc = getVC();
    const vpW = track.parentElement.clientWidth;
    cardW = (vpW - GAP * (vc - 1)) / vc;
    // console.log("Card Width:", cardW);
    track.querySelectorAll('.slide-card').forEach(el => {
        el.style.width = cardW + 'px';
    });
}

/* ── translate to trackPos (no animation flag) ── */
function move(animated) {
    const offset = trackPos * (cardW + GAP);
    track.style.transition = animated
        ? 'transform 0.52s cubic-bezier(0.77,0,0.175,1)'
        : 'none';
    track.style.transform = `translateX(-${offset}px)`;
}

/* ── recenter silently if we drift too far ──
   Keep trackPos in range [N, (COPIES-2)*N]
   so there's always room in both directions.           */
function recenterIfNeeded() {
    const lo = N;
    const hi = (COPIES - 2) * N;
    if (trackPos < lo || trackPos > hi) {
        // jump to equivalent position in the middle region
        trackPos = MID_COPY * N + (((trackPos % N) + N) % N);
        move(false);
    }
}

/* ── dots ── */
function buildDots() {
    dotsWrap.innerHTML = '';
    SLIDES.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'dot' + (i === activeReal ? ' active' : '');
        d.addEventListener('click', () => jumpTo(i));
        dotsWrap.appendChild(d);
    });
}
function refreshDots() {
    dotsWrap.querySelectorAll('.dot').forEach((d, i) =>
        d.classList.toggle('active', i === activeReal));
}

/* ── next / prev ── */
function next() {
    if (busy) return;
    busy = true;
    trackPos++;
    activeReal = trackPos % N;
    move(true);
    refreshDots();
    setTimeout(() => {
        recenterIfNeeded();
        busy = false;
    }, 540);
}

function prev() {
    if (busy) return;
    busy = true;
    trackPos--;
    activeReal = ((trackPos % N) + N) % N;
    move(true);
    refreshDots();
    setTimeout(() => {
        recenterIfNeeded();
        busy = false;
    }, 540);
}

/* ── dot click: jump directly to slide i ── */
function jumpTo(i) {
    if (busy) return;
    busy = true;
    // find nearest copy of slide i relative to current trackPos
    const cur = trackPos % N;
    let delta = i - cur;
    // prefer shortest path (forward or backward)
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    trackPos += delta;
    activeReal = i;
    move(true);
    refreshDots();
    setTimeout(() => {
        recenterIfNeeded();
        busy = false;
    }, 540);
}

/* ── init ── */
function init() {
    vc = getVC();
    buildTrack();
    setCardWidths();
    trackPos = MID_COPY * N + activeReal;
    move(false);
    buildDots();
}

document.querySelector('.next-btn').addEventListener('click', next);
document.querySelector('.prev-btn').addEventListener('click', prev);


/* autoplay */
let auto = setInterval(next, 3500);
const sec = document.querySelector('.slider-section');
sec.addEventListener('mouseenter', () => clearInterval(auto));
sec.addEventListener('mouseleave', () => { auto = setInterval(next, 3500); });

/* touch swipe */
let tx = 0;
track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
});

/* resize */
let rt;
window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
        const newVC = getVC();
        if (newVC !== vc) { init(); }
        else { setCardWidths(); move(false); }
    }, 120);
});

init();