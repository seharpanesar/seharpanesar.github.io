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

const Texts = [
    "Python", "Java", "C / C++", 
    "Git", "Pandas / Numpy", "TensorFlow / PyTorch", 
    "HTML", "JavaScript", "CSS", "Linux / Unix", 
    "SQL", "AWS"
];

var tagCloud = TagCloud('.sphere', Texts, {
    // Sphere radius in px
    radius: 230,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'medium',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true
});

// Giving color to each text in sphere
var color = '#F55723';
document.querySelector('.sphere').style.color = color;