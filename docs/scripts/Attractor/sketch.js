// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

let movers = [];
let attractor;

var moverQuantity = document.getElementById("parent").getAttribute('data-moverQuantity');
// console.log(moverSize);
var moveMouse = document.getElementById("parent").getAttribute('data-moveMouse');
// console.log(moverSize);

function setup() {
  var parentDiv = document.getElementById("parent");
  var divDimensions = parentDiv.getBoundingClientRect();
  //console.log("parent width: " + divDimensions.width + "\nparent height: " + divDimensions.height);

  var myCanvas = createCanvas(divDimensions.width, divDimensions.height);
  myCanvas.parent("parent");

  for (let i = 0; i < +moverQuantity; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);
    movers[i] = new Mover(x, y, m);
  }
  attractor = new Attractor(width / 2, height / 2, 5);
  //background(0);
}

// let bg;
// bg = loadImage('../images/upic/1.png');

function draw() {
  clear();
  background(loadImage('../images/textures/transparent.png'));
  attractor.show();
  for (let mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }
  if (moveMouse === "yes") {
    if (mouseIsPressed) {
      if (isInScreen() && !isInMenuBox()) {
        attractor.pos.x = mouseX;
        attractor.pos.y = mouseY;
        // console.log("clicking on screen1 and outside of menu");
      } else {
        //console.log("clicking out of screen1");
      }
    }
  }
}

function isInScreen() {
  if (0 < mouseY && windowHeight > mouseY && windowWidth > mouseX && 0 < mouseX) {
    return true;
  } else {
    return false;
  }
}

function isInMenuBox() {
  if (0 < mouseY && 100 > mouseY && windowWidth - 350 < mouseX && windowWidth > mouseX) {
    return true;
  } else {
    return false;
  }
}

function windowResized() {
  resizeCanvas(divDimensions.width, divDimensions.height);
}