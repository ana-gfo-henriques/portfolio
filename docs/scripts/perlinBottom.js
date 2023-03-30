screen.orientation.addEventListener("change", function(e) {
    generatePerlin();
    var bg_canvas = document.getElementById('perlinBackground');
    bg_canvas.style.height = bodyHeight.toString() + "px";
    bg_canvas.style.width = bodyWidth.toString() + "px";
    // location.reload();
});

function generatePerlin(url) {
    var bg_canvas = document.getElementById('perlinBackground');
    var bodyWidth = document.getElementById('body').clientWidth;
    var bodyHeight = document.getElementById('body').clientHeight;

    //console.log("body height: "+ bodyHeight.toString());


    // bg_canvas.css({
    //     "mix-blend-mode": "hard-light",
    //     "opacity": "1",
    //     "filter": "contrast(120%)",
    //     "background-image": "url('images/noise/noise.svg')"
    // });

    // obj.style.setProperty("background-color", "lightgray");

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