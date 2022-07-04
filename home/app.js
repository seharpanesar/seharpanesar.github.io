const home = document.querySelector(".home");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".name");
const info = document.querySelector(".intro_text")
const navbarlinks = document.querySelector(".nav-links");

// define navbar animations beforehand


// chain animations with this obj 
const tl = new TimelineMax();

tl.fromTo(home,1,{height:"0%"}, {height:"100%", ease: Power2.easeInOut})
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0})
.fromTo(info,1,{opacity:0}, {opacity:1}, "-=0.5")
.fromTo(navbarlinks, 1, {opacity: 0}, {opacity: 1}, "-=0.5")
