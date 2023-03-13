function toggleMenu(){
    var menuList = document.getElementById("menuList");
    
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } 
    else {
        menuList.style.display = "block";
    } 
    // console.log("function was called");
}


function changeBackgroundImage (id, imageLink) {
    var image = document.getElementById(id);
    //var hoverImage = document.getElementById(id).getAttribute('data-hoverImage');
    var hoverImageLink = "url('" + imageLink + "')";

    console.log(hoverImageLink);

    image.style.backgroundImage = hoverImageLink;
}