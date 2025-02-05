`use strict`;

// load stuff
const loadingScreen = document.getElementById("loading-screen")
const desktop = document.getElementById("desktop")

setTimeout(function(){
    loadingScreen.style.display = "none";
    desktop.style.display = "inherit";
},3000);

// desktop windows
const aboutMeWindow = document.getElementById("about-me-txt-window");
const doomWindow = document.getElementById("doom-window")
const trashWindow = document.getElementById("trash-window")
const gokuWindow = document.getElementById("goku-window")

// desktop buttons

const aboutMeButton = document.getElementById("about-me-txt");
const doomButton = document.getElementById("doom");
const trashButton = document.getElementById("recycle-bin")
const gokuButton = document.getElementById("goku")

const doomIFrame = document.getElementById('doom-iframe')

aboutMeButton.addEventListener('click',() => {
    windowToggle(aboutMeWindow);
})

doomButton.addEventListener('click',() => {
    windowToggle(doomWindow)
})

trashButton.addEventListener('click',() => {
    windowToggle(trashWindow)
})

gokuButton.addEventListener('click',() => {
    windowToggle(gokuWindow)
})

//

const windowToggle = (window) => {
    window.classList.toggle("invisible");
    window.classList.toggle("visible");
    if (window == doomWindow){
        if (doomIFrame.src != "https://doomonline1.vercel.app/dos.html"){
            doomIFrame.src = "https://doomonline1.vercel.app/dos.html";
        } else {
            doomIFrame.src = '';
        }
        console.log(doomIFrame.src)
    }
}