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
    "Python", "Java", "C / C++", "AWS", 
    "Git", "Pandas / Numpy", "TensorFlow / PyTorch", 
    "HTML", "JavaScript", "CSS", "Linux / Unix", 
    "SQL"
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
var color = '#F795AF';
document.querySelector('.sphere').style.color = color;

// color each skill in tagcloud

all_items = document.querySelectorAll('.tagcloud--item')

var first = '#f08f90'
var second = '#c72eff'
var third = '#2d95f7'

const color_dict = {
    "Python": "#eb4034", 
    "Java": second,
    "C / C++": "#861be3", 
    "Git":"#f57acc",
    "Pandas / Numpy":"#fa0f94",
    "TensorFlow / PyTorch": "#ed13a4", 
    "HTML":"#861be3", 
    "JavaScript":"#861be3",
    "CSS":"#861be3",
    "Linux / Unix":second, 
    "SQL": third, 
    "AWS": third
}

for (var i = 0 ; i < all_items.length; i++) {

    var curr_color = color_dict[all_items[i].innerHTML]
    all_items[i].style.color = curr_color; 
 } 