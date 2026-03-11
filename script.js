document.addEventListener("DOMContentLoaded", function () {

let music1 = document.getElementById("bgmusic1");
let music2 = document.getElementById("bgmusic2");

/* MUSIC PLAYER */

function playMusic(audio) {
    if (!audio) return;

    audio.volume = 0;
    audio.play().catch(()=>{});

    let fade = setInterval(function () {
        if (audio.volume < 0.6) {
            audio.volume += 0.02;
        } else {
            clearInterval(fade);
        }
    }, 120);
}

playMusic(music1);
playMusic(music2);


/* TEXT FADE IN */

let textBox = document.querySelector(".dialogue-box");

if(textBox){
    textBox.style.opacity = 0;

    setTimeout(()=>{
        textBox.style.transition = "opacity 1.5s";
        textBox.style.opacity = 1;
    },200);
}


/* CHOICE HOVER EFFECT */

let choices = document.querySelectorAll(".choice");

choices.forEach(choice => {

    choice.addEventListener("mouseenter", () => {
        choice.style.transform = "scale(1.03)";
        choice.style.transition = "0.2s";
    });

    choice.addEventListener("mouseleave", () => {
        choice.style.transform = "scale(1)";
    });

});

});
