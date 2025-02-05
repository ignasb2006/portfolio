const cat = document.getElementById("cat");
const explosion = document.getElementById("explosion");
const puppet = document.getElementById("puppet");
const meowMeowName = document.getElementById("meow-meow-nametag");
const pearto = document.getElementById("pearto");

const h1s = document.getElementsByName("h1");

let catExploded = false;
let konamiCodeEntered = false;

const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];
let inputArray = [];

cat.addEventListener("click",() => {
    if (catExploded == false){
        console.log("nooo lil meow meow!!");
        catExploded = true;
        cat.style.display = "none";
        explosion.style.display = "inherit";
        let audio = new Audio("sounds/boom.mp3");
        audio.play();
        meowMeowName.textContent = "You killed lil meow meow."
        document.body.classList.remove("rainbow-aids");
        document.body.classList.add("darkness");
        document.documentElement.requestFullscreen();
        setTimeout(function(){
            let creepySong = new Audio("sounds/why.mp3");
            creepySong.play();
            puppet.style.display = "inherit";
            puppet.style.transition = "30s";
            setTimeout(function(){
                puppet.classList.remove("puppet-transform");
            },1000);
            
        },2000)
    }
});

onkeydown = (e) => {
    const inputLength = inputArray.length;
    const nextInput = konamiCode[inputLength]
    if (e.code == nextInput) {
        inputArray.push(e.code)        
        if (inputArray.length == konamiCode.length){
            let audio = new Audio("sounds/diarrhea.mp3");
            audio.play();
            pearto.style.display = "inherit";
        } else {
            let audio = new Audio("sounds/ding.mp3");
            audio.play();
        }
    } else {
        inputArray = [];
    }
}

console.log("what are you looking for here buddy");
console.log("theres nothing here");
console.log("ok fine you can get a hint");
console.log("https://lt.wikipedia.org/wiki/Konami")