const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const timer = document.getElementById("timer");

/* DATA: 19/11/2025 */
const startDate = new Date(2025, 10, 19, 0, 0, 0);

/* TOCAR MÚSICA */
function playMusic() {
  music.play();
  localStorage.setItem("musicPlaying", "true");
  musicBtn.classList.add("spinning");
}

/* MANTER MÚSICA */
if (localStorage.getItem("musicPlaying") === "true") {
  music.play().catch(() => {});
  musicBtn.classList.add("spinning");
}

/* CRONÔMETRO */
function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent =
    `A gente se conhece há ${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

/* CORAÇÕES */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
