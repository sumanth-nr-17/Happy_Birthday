function scrollToGallery() {
    document.getElementById("gallery")
        .scrollIntoView({
            behavior: "smooth"
        });
}

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {
        music.play();
        musicBtn.innerText = "⏸ Pause Music";
        playing = true;
    } else {
        music.pause();
        musicBtn.innerText = "🎵 Play Music";
        playing = false;
    }

}
);

const message =
"A little digital surprise made especially for you ✨";

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typingText").innerHTML +=
            message.charAt(i);

        i++;

        setTimeout(typeWriter, 50);
    }

}

typeWriter();



function openLetter() {

    document.getElementById("secretMessage").innerHTML =
    "Not every admiration needs words. Sometimes it shows itself through effort. 🌸";

}

const photos = document.querySelectorAll(".photo-grid img");

photos.forEach((photo) => {

    photo.addEventListener("click", () => {

        if (photo.classList.contains("zoomed")) {

            photo.classList.remove("zoomed");

        } else {

            document.querySelectorAll(".zoomed").forEach((p) => {
                p.classList.remove("zoomed");
            });

            photo.classList.add("zoomed");
        }

    });

});

function launchCelebration() {

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    document.getElementById("celebrationMessage").innerHTML =
    `
    ✨ Keep Shining KAVANA ✨
    <br><br>
    The world became a little brighter
    the day you were born. 🌸
    `;

}

document.addEventListener("click", function(e) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.fontSize = "24px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = 0;

    const animate = setInterval(() => {

        pos++;

        heart.style.transform =
            `translateY(-${pos * 2}px)`;

        heart.style.opacity =
            1 - pos / 50;

        if (pos > 50) {

            clearInterval(animate);

            heart.remove();
        }

    }, 10);

});

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 2000);

});

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.pointerEvents = "none";
    sparkle.style.opacity = "0.8";
    sparkle.style.zIndex = "1";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}, 800);

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

document
.querySelectorAll(".photo-grid img")
.forEach((img)=>{

    img.addEventListener("click",()=>{

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

document
.getElementById("closeLightbox")
.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

function blowCandles(){

    document.getElementById("wishMessage")
    .innerHTML =
    "✨ May all your dreams come true, KAVANA ✨";

    confetti({
        particleCount:150,
        spread:100
    });

}

for(let i=0;i<40;i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "✨";

    star.style.left =
    Math.random()*100+"%";

    star.style.top =
    Math.random()*100+"%";

    star.style.fontSize =
    Math.random()*10+10+"px";

    document
    .querySelector(".stars-container")
    .appendChild(star);

}


