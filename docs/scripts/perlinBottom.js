window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
    // console.log("orientation changed");
    location.reload();
}

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







// var plus = document.getElementById("readMoreLess").onmouseover = changeBackgroundImage();
// var plus = document.getElementById("readMoreLess").onmouseout = changeBackgroundImage();
document.getElementById("aestheticSpaceImg").onmouseover = changeBackgroundImage(this.id);

// plus.addEventListener("mouseover", changeBackgroundImage(), false);
// plus.addEventListener("mouseout", changeBackgroundImage(), false);
// images.addEventListener("mouseover", changeBackgroundImage(), false);
// images.addEventListener("mouseout", changeBackgroundImage(), false);



function changeBackgroundImage (id) {
    var image = document.getElementById(id);

    console.log("gjdgfhkjhg");

    if (image.style.filter === "none") {
        image.style.filter = "grayscale(1) contrast(200%)";
    } 
    else {
        image.style.filter = "none";
    }
}