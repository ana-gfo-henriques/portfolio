function randomizer(type) {
    return type[Math.floor(Math.random()*type.length)];
}

var textures = [
    "images/textures/texture1.webp",
    "images/textures/texture2.webp",
    "images/textures/texture3.webp",
    "images/textures/texture4.webp",
    "images/textures/texture5.webp",
    "images/textures/texture6.webp",
    "images/textures/texture7.webp",
    "images/textures/texture8.webp",
    "images/textures/texture9.webp",
    "images/textures/texture10.webp"
];

var p5Design = [
    "images/p5Design/p5Design1.webp",
    "images/p5Design/p5Design2.webp",
    "images/p5Design/p5Design3.webp",
    "images/p5Design/p5Design4.webp",
    "images/p5Design/p5Design5.webp",
    "images/p5Design/p5Design6.webp",
    "images/p5Design/p5Design7.webp",
    "images/p5Design/p5Design8.webp"
];

var p5Publishing = [
    "images/p5Publishing/p5Publishing1.webp",
    "images/p5Publishing/p5Publishing2.webp",
    "images/p5Publishing/p5Publishing3.webp",
    "images/p5Publishing/p5Publishing4.webp",
    "images/p5Publishing/p5Publishing5.webp",
    "images/p5Publishing/p5Publishing6.webp",
    "images/p5Publishing/p5Publishing7.webp",
    "images/p5Publishing/p5Publishing8.webp"
];

var bodyImg = document.getElementById("perlinBackground");
var designCanvasImg = document.getElementById("designCanvas");
var publishingCanvasImg = document.getElementById("publishingCanvas");

bodyImg.src = randomizer(textures);
designCanvasImg.src = randomizer(p5Design);
publishingCanvasImg.src = randomizer(p5Publishing);