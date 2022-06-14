//1

const sifu = document.getElementById("js--pakket1")
const switches = document.getElementsByClassName("product")
sifu.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--pakket1-modal").style.display = "grid";

}


const closesifu = document.getElementById("js--pakket1-button");
closesifu.onclick = function(){
    document.getElementById("js--pakket1-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//2


const legion = document.getElementById("js--pakket2")
legion.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--pakket2-modal").style.display = "grid";

}


const closelegion = document.getElementById("js--pakket2-button");
closelegion.onclick = function(){
    document.getElementById("js--pakket2-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//rocket

const rocket = document.getElementById("js--pakket3")
rocket.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--pakket3-modal").style.display = "grid";

}


const closerocket = document.getElementById("js--pakket3-button");
closerocket.onclick = function(){
    document.getElementById("js--pakket3-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//miles


const miles = document.getElementById("js--pakket4")
miles.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--pakket4-modal").style.display = "grid";

}


const closemiles = document.getElementById("js--pakket4-button");
closemiles.onclick = function(){
    document.getElementById("js--pakket4-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}