gsap.registerPlugin(ScrollTrigger);

exp_header = document.querySelectorAll(".exp_header")
exp_cards = document.querySelectorAll(".exp_cards") // 3 cards
edu_header = document.querySelectorAll(".edu_header")
edu_desc = document.querySelectorAll(".edu_desc") // text 
edu_box =  document.querySelectorAll(".description-container")
edu_grid = document.querySelectorAll(".bach, .mast, .sem") // grid 
edu_legend = document.querySelectorAll(".legend-entry") // 2 of them
skills_header = document.querySelectorAll(".skills-header") 
skills_cloud = document.querySelectorAll(".sphere")
skills_bar = document.querySelectorAll(".bar")
skills_bar_labels =document.querySelectorAll(".bar-labels") //

var order = [exp_header, exp_cards, edu_header, edu_desc, edu_box, edu_grid, 
    edu_legend, skills_header, skills_cloud, skills_bar, skills_bar_labels]


    //https://www.youtube.com/watch?v=ygcEKd0RIGg


let t1 = new TimelineMax();

t1.fromTo(exp_header,0.5,{opacity:0, y:20}, {opacity:1, y:0, duration: 0.3})
.fromTo(exp_cards, {opacity: 0, y:20}, {opacity: 1, y:0,duration: 0.3})
.fromTo(edu_header,{opacity:0, y:20}, {opacity:1, y:0,duration: 0.3})
.fromTo(edu_desc,  {opacity: 0, y:20}, {opacity: 1, y:0,duration: 0.3})
// .fromTo(edu_box, {opacity: 0, y:20}, {opacity: 1, y:0,duration: 0.3})
// .fromTo(edu_grid, {opacity: 0, y:20}, { opacity: 1, y:0,duration: 0.3})
// .fromTo(edu_legend, {opacity: 0, y:20}, {opacity: 1, y:0,duration: 0.3})
// .fromTo(skills_header, {opacity: 0, y:20}, {opacity: 1, y:0,duration: 0.3})
// .fromTo(skills_cloud,  {opacity: 0, y:20}, { opacity: 1, y:0,duration: 0.3})
// .fromTo(skills_bar, {opacity: 0, y:20}, { opacity: 1, y:0,duration: 0.3})
// .fromTo(skills_bar_labels, { opacity: 0, y:20}, {opacity: 1, y:0,duration: 0.3})


let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".dark",
        start: "center-bottom"
    }
});

t2.from(edu_box, {opacity: 0, y:20})
.from(edu_grid, {opacity: 0, y:20})
.from(edu_legend, {opacity: 0, y:20})
.from(skills_header, {opacity: 0, y:20})
.from(skills_cloud,  {opacity: 0, y:20})
.from(skills_bar, {opacity: 0, y:20})
.from(skills_bar_labels, { opacity: 0, y:20})




// animation for courses description display 
courses = document.querySelectorAll('.bach,.mast');

for (var i = 0 ; i < courses.length; i++) {
    courses[i].addEventListener('mouseenter', changeBackground, false ) ; 
    courses[i].addEventListener('mouseleave', backToNormal, false ) ;
}
    
function changeBackground(event) {
    object = event.target
    var paragraph = document.querySelector(".description");
    var text = document.createTextNode(object.getElementsByClassName("course-desc")[0].innerHTML);

    paragraph.appendChild(text);
}

function backToNormal(event) {
    var paragraph = document.querySelector(".description");
    while(paragraph.firstChild) {
        paragraph.removeChild(paragraph.firstChild);
    }
}

// tagcloud animation
const Texts = [
    "Python", "Java", "C / C++", "AWS", 
    "Git", "Pandas / Numpy", "TensorFlow / PyTorch", 
    "HTML", "JavaScript", "CSS", "Linux / Unix", 
    "SQL"
];

var tagCloud = TagCloud('.sphere', Texts, {
    radius: 230,

    maxSpeed: 'fast',
    initSpeed: 'medium',

    direction: 135,

    keep: true
});


// color each skill in tagcloud
all_items = document.querySelectorAll('.tagcloud--item')

const color_dict = {
    "Python": "#eb4034", 
    "Java": '#c72eff',
    "C / C++": "#861be3", 
    "Git":"#f57acc",
    "Pandas / Numpy":"#fa0f94",
    "TensorFlow / PyTorch": "#ed13a4", 
    "HTML":"#861be3", 
    "JavaScript":"#861be3",
    "CSS":"#861be3",
    "Linux / Unix":'#c72eff', 
    "SQL": '#2d95f7', 
    "AWS": '#2d95f7'
}

for (var i = 0 ; i < all_items.length; i++) {
    var curr_color = color_dict[all_items[i].innerHTML]
    all_items[i].style.color = curr_color; 
 } 