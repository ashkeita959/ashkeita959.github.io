// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat"); // matches index.html
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const letterWindow = document.querySelector(".letter-window");

const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

// Open letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
  document.body.classList.add("letter-open"); // hide background.jpg when open

  if (music && music.paused) {
    music.volume = 0.35;
    music.play().catch(() => {});
    if (musicToggle) musicToggle.textContent = "🔊 Music";
  }

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Grow YES when NO is clicked
let yesScale = 1;
noBtn.addEventListener("click", () => {
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// Final state when YES is clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Yay! I knew you would say yes!";
  catImg.src = "cat_dance.gif";
  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});

// Music toggle
if (musicToggle && music) {
  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch(() => {});
      musicToggle.textContent = "🔊 Music";
    } else {
      music.pause();
      musicToggle.textContent = "🔈 Music";
    }
  });
}
