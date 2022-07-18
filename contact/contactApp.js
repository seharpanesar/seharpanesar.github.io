// targets 
const title = document.querySelector("h1");
const text = document.querySelector("h3");

const name_email = document.querySelectorAll(".col")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
const button = document.querySelector("#button")

arr = [title, text, name_email, subject, message, button]

// const tl = new TimelineMax();

let t = gsap.timeline()

t.fromTo(arr,{opacity:0, y:10}, {opacity:1, y:0})

info_text = "I love taking on interesting and difficult projects, so if you have one in mind, please let me know!"

current_text = ""

let i = 0
let j = 0

function loop() {
    if(i < info_text.length) {
        current_text = current_text.concat(info_text[i])
        text.innerHTML = current_text;
        console.log(info_text[i]);
    }
    i++

    setTimeout(loop, Math.random()*30 + 30)
}

setTimeout(loop, 1500)
loop()
