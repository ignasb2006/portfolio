`use strict`;

const loadingScreen = document.getElementById("loading-screen")
const desktop = document.getElementById("desktop")

document.body.addEventListener('click',() => {
    document.documentElement.requestFullscreen();
})

setTimeout(function(){
    loadingScreen.style.display = "none";
    desktop.style.display = "inherit";
},10);