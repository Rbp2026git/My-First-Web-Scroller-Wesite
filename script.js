let homeBtn = document.getElementById("homeBtn");
let notesBtn = document.getElementById("notesBtn");
let contactBtn = document.getElementById("contactBtn");
let modeBtn = document.getElementById("modeBtn");

//Scroll function
function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

//Dark Mode Toggle
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

//Add event listner
homeBtn.addEventListener("click", function(){
    scrollToSection("home");
})

notesBtn.addEventListener("click", function(){
    scrollToSection("notes");
})

contactBtn.addEventListener("click", function(){
    scrollToSection("contact");
})

modeBtn.addEventListener("click", function(){
    toggleDarkMode();
})
/*  */
const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("popup");
const backdrop = document.getElementById("backdrop");

menuBtn.addEventListener("click", (e)=>{
    e.stopPropagation();

    const isOpen = popup.classList.toggle('open');
    backdrop.classList.toggle('open', isOpen);
})

backdrop.addEventListener("click", ()=>{
    popup.classList.remove('open');
    backdrop.classList.remove('open');
})

document.addEventListener('keydown', (e)=>{

    if(e.key === 'Escape'){
        popup.classList.remove('open');
        backdrop.classList.remove('open');
    }
})

/*form this line , we are working on hero section */

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");


let index = 0;
/* HOW MANY SLIDES VISIBLE */
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

/* UPDATE SLIDER */
function updateSlider(){

    let visibleSlides = getVisibleSlides();

    let slideWidth = getSlideWidth();
    // let slideWidth = slides[0].offsetWidth + 16; // older

    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

/* NEXT */
function nextSlide(){

    let maxIndex = slides.length - getVisibleSlides();

    index++;

    if(index > maxIndex){
       index = 0;
    }
    updateSlider();
}

/* PREV */
function prevSlide(){

    let maxIndex = slides.length - getVisibleSlides();

    index--;

    if(index < 0){
        index = maxIndex;
    }
    updateSlider();
}

/*Storing 0f  in variable */
let autoSlide = setInterval(nextSlide, 3000);

/*reset Auto Slide */
/*Ye function banao — reset ke liye */
function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}

/* Button events mein resetAutoSlide call karo */
/* BUTTON EVENT */
nextBtn.addEventListener("click", ()=>{
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener("click", ()=>{
    prevSlide();
    resetAutoSlide();
});

/* RESPONSIVE */
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
});
