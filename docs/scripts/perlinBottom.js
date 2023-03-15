var bg_canvas = document.getElementById('perlinBackground');
//var body = document.getElementById('body');
var bodyWidth = document.getElementById('body').clientWidth;
var bodyHeight = document.getElementById('body').clientHeight;

//console.log("body height: "+ bodyHeight.toString());

bg_canvas.style.height = bodyHeight.toString() + "px";
bg_canvas.style.width = bodyWidth.toString() + "px";

perlin_noise(bg_canvas);

//console.log("canvas height: "+ bg_canvas.clientHeight.toString());