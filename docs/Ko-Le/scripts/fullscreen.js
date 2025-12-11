function fullscreen(imgId) {

    var imgSrc = document.getElementById(imgId).getAttribute("src");
    var fullscreenImage = document.getElementById("fullscreenImage");

    var overlay = document.getElementById("overlay");
    var bodyWidth = document.getElementById('body').clientWidth;
    var bodyHeight = document.getElementById('body').clientHeight;

    var imgUrl = "url('" + imgSrc + "')";

    console.log(imgSrc);
    console.log(imgUrl);
    
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
    } 
    else {
        overlay.style.display = "block";

        overlay.style.width = bodyWidth.toString() + "px";
        overlay.style.height = bodyHeight.toString() + "px";
        fullscreenImage.style.backgroundImage = imgUrl;
    } 
}

function closeHome() {
    var popUp = document.getElementById("popUp");
    popUp.style.display = "none";
    console.log("doing it");
}