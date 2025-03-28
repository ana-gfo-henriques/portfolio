function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    } else {
        return false;
    }
    // alert(answer ? 'It is a mobile device' : 'It is not a mobile device');
 }

function toggleMenu(){
    var menuList = document.getElementById("menuList");
    var menuOverlay = document.getElementById("menuOverlay");
    var asterisk = document.getElementById("asterisk");

    if(checkMobile()) {
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
            menuOverlay.style.display = "none";
            asterisk.style.backgroundImage = "url(images/menu/asterisk.svg)";
        } 
        else {
            menuList.style.display = "block";
            menuOverlay.style.display = "block";
            asterisk.style.backgroundImage = "url(images/menu/asterisk_h.svg)";
        } 
    }else {
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
        } 
        else {
            menuList.style.display = "block";
        } 
    }
    
    // if (menuList.style.display === "block") {
    //     menuList.style.display = "none";
    // } 
    // else {
    //     menuList.style.display = "block";
    // } 
    // console.log("function was called");
}





function disclaimer() {
    var aboutTitle = document.getElementById("aboutTitle"); 
    var aboutText = document.getElementById("aboutText");
    var disclaimerClose = document.getElementById("disclaimer");

    if (disclaimerClose.innerHTML === "✕") {
        disclaimerClose.innerHTML = "disclaimer";
        disclaimerClose.style = "animation: none; color: transparent";
        aboutTitle.innerHTML = "ABOUT ME";
        aboutText.innerHTML = 'Hi, my name is <span>Ana</span> and I’m a designer and researcher currently based in Lisbon. I got my Bachelor’s degree in Engineering Physics, but I sought to have a move direct sociocultural impact and switched fields for my Master’s in Communication Design. As both a <span>scientist</span> and a <span>designer</span>, I came to understand both these aspects not as opposites, but complementary — two different sides to the same pursuit of knowledge coin. With this in mind, I have always nurtured and developed many inter- and <span>multidisciplinary</span> interests, such as art and design philosophy, web and editorial design, and creative coding. I have also recently been experimenting with some musical endeavours. Currently, in between lecturing, learning, and creating, I am PhD student researching ways to create a framework for <span>design activism</span> through an ethical deliberation process that is specifically anchored in intersectional queer/feminist ways of knowing. I am also very interested in exploring possible materializations of this type of discourse so if you have any thoughts about any of this I’d really love to <span>hear from you</span>. I love to debate and share ideas and skills so if you think we might have something to teach and learn from each other, please hit me up <span>:)</span>';

        document.body.scrollTop = 0;

        //console.log("calling if");
        //console.log(disclaimerClose.innerHTML);
    } 
    else {
        disclaimerClose.innerHTML = "✕";
        disclaimerClose.style = "animation: none; color: black";
        aboutTitle.style = "margin-top: 12.5vh !important"
        aboutTitle.innerHTML = "DISCLAIMER";
        aboutText.innerHTML = 'I am a 26-year-old cisgender (to be completely honest, the gender journey is not really complete yet but we’re going with that at the moment) white queer neurodivergent able-bodied woman. My preferred pronouns are she/they. I am currently living in Lisbon, Portugal but I was born in the United States of America where I lived for two-and-a-half years. I come from a middle-class background, my education has been primarily anglo- and lusophone and I have always lived in urban centers. Even though most of my family is catholic, I do not subscribe to any particular religion or creed.<br><br>These are my biases.<br>(I think)';

        document.body.scrollTop = 0;

        //console.log("calling else");
        //console.log(disclaimerClose.innerHTML);
    }
}