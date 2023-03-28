// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd


var title = document.getElementById("parent").getAttribute('data-title');
//console.log(title);

var fontSize = document.getElementById("parent").getAttribute('data-fontSize');
//console.log(fontSize);

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
  
  
  show() {
    push();
      stroke(0);
      strokeWeight(0.0025*windowWidth);
      fill(255, 255, 255, 50);
      textSize(0.12*windowWidth);
      textFont('Arial');
      textStyle('bold');
      textStyle('italic');
      textAlign(CENTER, CENTER);
      text(title, this.pos.x, this.pos.y);
      
      stroke(0);
      strokeWeight(0);
      fill(0);
      textSize(0.12*windowWidth);
      textFont('Times');
      textStyle('normal');
      textAlign(CENTER, CENTER);
      text(title, this.pos.x-0.035*windowWidth, this.pos.y+0.02*windowWidth);
    pop();
    
  }
}