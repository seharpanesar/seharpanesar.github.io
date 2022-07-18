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

info_text = "Hey there! <br><br> \
I am a 4th year BS/MS student at Purdue University studying Computer Science, and \
I love building things with software.  <br><br>\
Most of my experience is with backend engineering, but I recently became interested frontend engineering. \
I am also available for freelance work! Currently, I am looking for a SWE intern position for 2023 Summer. \
I have hosted some of my projects on this website, so feel free to browse around and contact me! <br><br>\
Thanks, <br>\
Sehar Panesar"

current_text = ""

let i = 0
let j = 0

function loop() {
    if(i < info_text.length) {
        current_text = current_text.concat(info_text[i])
        info.innerHTML = current_text;
        console.log(info_text[i]);
    }
    i++

    setTimeout(loop, 30)
}

setTimeout(loop, 1500)
loop()