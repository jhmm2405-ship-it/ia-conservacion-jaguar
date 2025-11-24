

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
