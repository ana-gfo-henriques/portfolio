// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

function selectElement(id) {

  console.log("function is being called step 1");

  //attractor
  class Attractor {
      
    constructor(x,y,m) {
      this.pos = createVector(x,y);
      this.mass = m;
      this.r = sqrt(this.mass)*2;
    }
    
    attract(mover) {
      let force = p5.Vector.sub(this.pos, mover.pos);
      let distanceSq = constrain(force.magSq(), 50, 300);
      let G = 1;
      let strength = G * (this.mass * mover.mass) / distanceSq;
      force.setMag(strength);
      mover.applyForce(force);
    }
    
    // show() {
    //   push();
    //     stroke(0);
    //     strokeWeight(3);
    //     fill(150, 120, 255);
    //     textSize(+fontSize);
    //     textFont('Arial');
    //     textStyle('bold');
    //     textStyle('italic');
    //     textAlign(CENTER, CENTER);
    //     text(title, this.pos.x, this.pos.y);
        
    //     stroke(0);
    //     strokeWeight(0);
    //     fill(0);
    //     textSize(+fontSize);
    //     textFont('Times');
    //     textStyle('normal');
    //     textAlign(CENTER, CENTER);
    //     text(title, this.pos.x-15, this.pos.y+15);
    //   pop();
      
    // }
  }


  console.log("function is being called step 2");

  //mover
  var moverSize = document.getElementById(id).getAttribute('data-moverSize');
  // console.log(moverSize);

  class Mover {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.vel.mult(0.01);
      this.acc = createVector(0, 0);
      this.mass = m;
      this.r = sqrt(this.mass) * 0.1;
    }

    applyForce(force) {
      let f = p5.Vector.div(force, this.mass*5);
      this.acc.add(f);
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }

    show() {
      push();
        fill(0, 0, 0, 155);
        textSize(+moverSize);
        text("*", this.pos.x, this.pos.y);
      pop();
    }
  }



  console.log("function is being called step 3");


  //sketch
  let movers = [];
  let attractor;

  var moverQuantity = document.getElementById(id).getAttribute('data-moverQuantity');
  // console.log(moverSize);
  var moveMouse = document.getElementById(id).getAttribute('data-moveMouse');
  // console.log(moverSize);

  function setup() {
    var parentDiv = document.getElementById(id);
    var divDimensions = parentDiv.getBoundingClientRect();
    console.log("parent width: " + divDimensions.width + "\nparent height: " + divDimensions.height);

    var myCanvas = createCanvas(divDimensions.width, divDimensions.height);
    myCanvas.parent(id);

    for (let i = 0; i < +moverQuantity; i++) {
      let x = random(width);
      let y = random(height);
      let m = random(50, 150);
      movers[i] = new Mover(x, y, m);
    }
    attractor = new Attractor(width / 2, height / 2, 5);
    //background(0);
  }

  console.log("function is being called step 4");

  function draw() {
    background(255);
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

}