const text = "Sehar Panesar";
let count = 0;
let index = 0; 
let currentText = "";
let letter = '';

// target all necessary elements specified in css
const burger = document.querySelector(".burger");
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll(".nav-links li");

// function for typing (isne function - called immeadiatly , and not after js is parsed)
//this is always being run todo: how exit once typing is done? 
// todo tmrw: figure out how to make the nav links fade in 
function type() {
    currentText = text;
    letter = currentText.slice(0, ++index);

    document.querySelector('.logo').textContent = letter;
    setTimeout(type, 100);
};

const navLinkIntro = () => {
    navLinks.style.animation = `animation: fadeIn 5s`;
}

// annon function that allows nav bar to displayed on click. 
const navSlide = () => {
    // Toggle nav. everytime the burger has been clicked, this happens 
    burger.addEventListener('click', ()=>{
        // nav-active is a class defined in css that details an animation 
        // for this line, that is translating the X element to the 0% mark. 
        // previously the navbar was positioned off the screen all the way to the right.  
        nav.classList.toggle('nav-active');

        // Animate links 
        navLinks.forEach((link, index)=> {
            // if-else statement is to toggle the animation so that 
            // it runs everytime it is opened and does not run if it is closed
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7) + 0.5}s`
            }
        });

        // burger animation 
        burger.classList.toggle('toggle')
    });
}

// annon function that runs all animations in order 
const app = () => {
    type();
    navLinkIntro();
    navSlide();
}

app()