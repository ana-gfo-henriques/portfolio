function generatePerlin(url) {

    // console.log(window.orientation);

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

function changeBackgroundImage (id) {
    var image = document.getElementById(id);

    if (image.style.filter === "none") {
        image.style.filter = "grayscale(1) contrast(200%)";
        image.style.transition = "filter 0.1s";
    } 
    else {
        image.style.filter = "none";
        image.style.transition = "filter 0.1s";
    }
}

// window.addEventListener("orientationchange", handleOrientation);

// function handleOrientation(event) {
//     // console.log("orientation changed");
//     // location.reload();
//     generatePerlin('url(images/noise/noise.svg)');
// }

// function handleOrientation() {
//     console.log(screen.orientation);
//     generatePerlin('url(images/noise/noise.svg)');
// }

// screen.orientation.addEventListener("change", handleOrientation);

function handleOrientation() {
    console.log("window orientation: " + window.orientation);
    // generatePerlin('url(images/noise/noise.svg)');
    location.reload();
}

window.onorientationchange = handleOrientation;