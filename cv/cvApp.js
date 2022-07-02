// todo: make screen white

const Texts =[
    "HTML", "CSS", "JAVASCRIPT", "SWIFT", "MONGOOSE", "REACT", "PYTHON", "SASS",
    "DJANGO", "NODEJS", "MONGODB", "EXPRESS", "MYSQL", "JQUERY", "JAVA"
];

var tagCloud = TagCloud(".Sphere", Texts, {
    radius: 230,

    maxSpeed: "normal",
    initSpeed: "fast",

    direction: 135,

    keep: true
});

var color = "#FF5733";
document.querySelector(".Sphere").style.color = color;