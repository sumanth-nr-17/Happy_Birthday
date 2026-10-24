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
