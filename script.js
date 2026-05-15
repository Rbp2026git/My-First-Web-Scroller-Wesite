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
        });

        dotsContainer.appendChild(dot);
    }
}

/* UPDATE SLIDER */
function updateSlider(){

    let visibleSlides = getVisibleSlides();

    let slideWidth = slides[0].offsetWidth + 16;

    slider.style.transform =
        `translateX(-${index * slideWidth}px)`;

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

/* BUTTON EVENTS */
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

 /* AUTO SLIDE */
 setInterval(nextSlide, 3000);

 /* RESPONSIVE */
 window.addEventListener("resize", () => {
     index = 0;
     createDots();
     updateSlider();
});

//* INITIAL */
createDots();
updateSlider();