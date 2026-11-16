const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const letterContainer = document.getElementById("letterContainer");
const instruction = document.getElementById("instruction");

const musicButton = document.getElementById("musicButton");
const loveSong = document.getElementById("loveSong");

openButton.addEventListener("click", () => {

  envelope.classList.add("open");

  instruction.textContent =
    "Una pequeña sorpresa hecha para ti ❤️";

  openButton.style.display = "none";

  setTimeout(() => {
    letterContainer.classList.add("visible");

    letterContainer.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 900);

});

musicButton.addEventListener("click", async () => {

  if (loveSong.paused) {

    try {
      await loveSong.play();
      musicButton.textContent = "♫ Pausar nuestra canción";
    } catch (error) {
      musicButton.textContent =
        "No se pudo reproducir. Revisa el archivo de música.";
    }

  } else {

    loveSong.pause();
    musicButton.textContent = "♫ Reproducir nuestra canción";

  }

});