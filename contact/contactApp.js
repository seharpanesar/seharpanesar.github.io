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

t.fromTo(arr,{opacity:0, y:20}, {opacity:1, y:0})
