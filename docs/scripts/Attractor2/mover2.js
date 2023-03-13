// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

function selectElement(id) {

  console.log("mover2 function is being called");

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

}

