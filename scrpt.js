const sobre = document.getElementById("sobre");
const hand = document.getElementById("hand");
const musica = document.getElementById("musica");
const mensaje = document.getElementById("mensaje");
const foto1 = document.getElementById("foto1");
const foto2 = document.getElementById("foto2");
const foto3 = document.getElementById("foto3");

function lanzarConfeti() {
  for (let i = 0; i < 6; i++) {
    const c = document.createElement("div");
    c.className = "confeti";
    c.style.left = Math.random() * window.innerWidth + "px";
    const size = 6 + Math.random() * 14;
    c.style.width = size + "px";
    c.style.height = size + "px";
    c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    const formas = ["50%", "0%", "30% 70% 70% 30%", "50% 20% 50% 20%"];
    c.style.borderRadius = formas[Math.floor(Math.random() * formas.length)];
    c.style.animationDuration = 2 + Math.random() * 3 + "s";

    // Emoji confeti
    if (Math.random() < 0.3) {
      c.textContent = ["🎉", "✨", "🎈", "💖"][Math.floor(Math.random() * 4)];
      c.style.fontSize = size + "px";
      c.style.textAlign = "center";
      c.style.lineHeight = size + "px";
    }

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

let confetiInterval;

sobre.onclick = () => {
  hand.style.display = "none";
  sobre.classList.add("abierto");

  musica.play().then(() => {
    confetiInterval = setInterval(lanzarConfeti, 200);
  }).catch(() => {
    alert("Toca otra vez para activar el sonido 🎶");
  });

  mensaje.innerHTML = "🎉 FELIZ CUMPLEAÑOS 🎉<br><span>JOSE ANGEL</span>";
  foto1.style.display = "block";
  foto2.style.display = "none";
  foto3.style.display = "none";

  setTimeout(() => {
    mensaje.textContent = "TE DESEAMOS TODOS";
    foto1.style.display = "none";
    foto2.style.display = "block";
    foto3.style.display = "none";
  }, 3000);

  setTimeout(() => {
    mensaje.textContent = "QUE DIOS TE DE MUCHA SALUD";
    foto1.style.display = "none";
    foto2.style.display = "none";
    foto3.style.display = "block";
  }, 6000);
};
