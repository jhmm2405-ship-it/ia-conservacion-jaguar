

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
