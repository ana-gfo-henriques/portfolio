function handleOrientation(event) {
    alert("orientation changed");
    generatePerlin('url(images/noise/noise.svg)');
}
  
window.addEventListener("deviceorientation", handleOrientation);

function generatePerlin(url) {
    var bg_canvas = document.getElementById('perlinBackground');
    var bodyWidth = document.getElementById('body').clientWidth;
    var bodyHeight = document.getElementById('body').clientHeight;

    //console.log("body height: "+ bodyHeight.toString());

    bg_canvas.style.setProperty("mix-blend-mode", "hard-light");
    bg_canvas.style.setProperty("filter", "contrast(120%)");
    bg_canvas.style.setProperty("background-image", url);

    bg_canvas.style.height = bodyHeight.toString() + "px";
    bg_canvas.style.width = bodyWidth.toString() + "px";

    const context = bg_canvas.getContext('2d');
    context.clearRect(0, 0, bg_canvas.width, bg_canvas.height);

    perlin_noise(bg_canvas);

    //console.log("canvas height: "+ bg_canvas.clientHeight.toString());
}