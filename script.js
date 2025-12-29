const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
  alert("💖 Eu sabia que você diria SIM 💖");
});
