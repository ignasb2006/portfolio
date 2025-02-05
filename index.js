const cat = document.getElementById("cat");
const explosion = document.getElementById("explosion");
const puppet = document.getElementById("puppet");
const meowMeowName = document.getElementById("meow-meow-nametag");

const h1s = document.getElementsByName("h1");

let catExploded = false;

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