function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    } else {
        return false;
    }
}

function openLink() {
    if (checkMobile()) {
        window.open("zine_mobile.html", '_blank');
    } else {
        window.open("zine.html", '_blank');
    }
}