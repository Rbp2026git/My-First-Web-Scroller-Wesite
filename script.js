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