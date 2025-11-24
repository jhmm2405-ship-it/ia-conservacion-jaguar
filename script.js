

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const revealPoint = 130;

    if (elementTop < windowHeight - revealPoint) {
      revealElements[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Hojas cayendo
const leafContainer = document.querySelector('.falling-leaves');

for (let i = 0; i < 12; i++) {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.style.left = Math.random() * 100 + "%";
  leaf.style.animationDuration = 4 + Math.random() * 6 + "s";
  leaf.style.animationDelay = Math.random() * 5 + "s";
  leafContainer.appendChild(leaf);
}

// MAPA DEL JAGUAR (Leaflet)
var map = L.map('jaguar-map').setView([19.2, -99.1], 5);

// Capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// Zonas donde hay jaguar
const zonasJaguar = [
  { nombre: "Selva Lacandona", coords: [16.7, -91.3] },
  { nombre: "Calakmul", coords: [18.1, -89.9] },
  { nombre: "Sierra Madre del Sur", coords: [17.0, -96.0] },
  { nombre: "Sinaloa – Nayarit – Jalisco", coords: [22.5, -105.0] }
];

zonasJaguar.forEach(z => {
  L.marker(z.coords).addTo(map)
    .bindPopup(`<b>${z.nombre}</b>`);
});
