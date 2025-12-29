// 🔴 EDITE A DATA AQUI (ANO, MÊS-1, DIA, HORA, MINUTO)
const startDate = new Date(2024, 0, 1, 0, 0, 0);

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💖`;
}

setInterval(updateTimer, 1000);
updateTimer();
