const musica = document.getElementById("musica");
const playBtn = document.getElementById("playBtn");
const cronometro = document.getElementById("cronometro");
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const popup = document.getElementById("popup");
const fechar = document.getElementById("fechar");

playBtn.onclick = () => {
  musica.play();
};

nao.onclick = () => {
  nao.style.position = "absolute";
  nao.style.left = Math.random()*80 + "%";
  nao.style.top = Math.random()*80 + "%";
};

sim.onclick = () => {
  popup.style.display = "flex";
};

fechar.onclick = () => {
  popup.style.display = "none";
};

const inicio = new Date("2025-11-19T00:00:00");

setInterval(()=>{
  const agora = new Date();
  const diff = agora - inicio;
  const dias = Math.floor(diff/(1000*60*60*24));
  const horas = Math.floor(diff/(1000*60*60)%24);
  const min = Math.floor(diff/(1000*60)%60);
  cronometro.innerText = `${dias} dias ${horas}h ${min}min juntos 💕`;
},1000);
