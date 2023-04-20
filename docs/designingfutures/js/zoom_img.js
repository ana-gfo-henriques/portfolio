console.log('Website made using https://boockup.marco.land/')

let imagesnumb = 13;

let imglist = document.getElementById('images');

for (v = 1; v < imagesnumb; v++) {
    var img = document.createElement("img");
    var src = 'files/fotos_site/' + v + '.jpg';
    img.setAttribute("id", v);
    img.setAttribute("src", src);
    img.addEventListener('click', zoom_img);

    imglist.appendChild(img);
}


document.onkeydown = function (evt) {
    evt = evt || window.event;


    if (evt['key'] == "Escape") {

        var check_zoom = document.getElementById('zoomed');

        if (check_zoom != null) {
            zoom_out();
        } else {
            close_proj();
        }
    }
};

function zoom_img(evt) {

    evt = evt || window.event;

    var i = evt.srcElement.src;
    var id = evt.srcElement.id;

    var dark_back = document.createElement('div');
    dark_back.setAttribute('id', 'zoomed');
    dark_back.addEventListener('click', zoom_out);

    var zoomed_img = document.createElement('img');
    zoomed_img.setAttribute('src', i);
    zoomed_img.setAttribute('id', id);

    dark_back.appendChild(zoomed_img);

    var esc = document.createElement('p');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        esc.appendChild(document.createTextNode('Touch anywhere to close'));
    } else {
        esc.appendChild(document.createTextNode('✕'));
    }

    esc.addEventListener('click', zoom_out);
    dark_back.appendChild(esc);

    document.body.appendChild(dark_back);




}

function zoom_out() {
    document.body.removeChild(document.getElementById('zoomed'));
}