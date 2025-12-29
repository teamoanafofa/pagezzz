const music = document.getElementById("music");

/* TOCAR MÚSICA */
function playMusic() {
  music.play();
  localStorage.setItem("musicPlaying", "true");
}

/* MANTER MÚSICA ENTRE ABAS */
if (localStorage.getItem("musicPlaying") === "true") {
  music.play().catch(() => {});
}

/* ABRIR CARTA EM NOVA ABA */
function openLetter() {
  localStorage.setItem("musicPlaying", "true");

  const win = window.open("", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>💌 Uma Carta</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>

      <audio src="boca.mp3" autoplay loop></audio>

      <div class="letter">
        <h1>💖 Uma carta pra você</h1>
        <p>
          Desde que te conheci, meus dias ficaram mais leves,
          meus sorrisos mais sinceros
          e meu coração escolheu você.
        </p>
        <p>
          Hoje começa oficialmente nossa história 💕
        </p>
        <h2>📅 19/11/2025</h2>
      </div>

      <div class="hearts"></div>

      <script>
        setInterval(() => {
          const heart = document.createElement("span");
          heart.innerHTML = "❤️";
          heart.style.left = Math.random() * 100 + "vw";
          heart.style.fontSize = Math.random() * 20 + 20 + "px";
          document.querySelector(".hearts").appendChild(heart);
          setTimeout(() => heart.remove(), 5000);
        }, 300);
      </script>

    </body>
    </html>
  `);
}

/* CORAÇÕES NA PÁGINA PRINCIPAL */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
