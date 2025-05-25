const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Changing the background backgroung imgs
const bgA = document.querySelector('.bg-a');
const bgB = document.querySelector('.bg-b');

const images = [
  './images/bgi1.jpg',
  './images/bgi2.jpg',
  './images/bgi3.jpg'
];

let current = 0;
let isAActive = true;

function crossfade() {
  const nextImage = images[(current + 1) % images.length];

  if (isAActive) {
    bgB.style.backgroundImage = `url(${nextImage})`;
    bgB.style.opacity = 1;
    bgB.classList.add("active");

    bgA.style.opacity = 0;
    bgA.classList.remove("active");
  } else {
    bgA.style.backgroundImage = `url(${nextImage})`;
    bgA.style.opacity = 1;
    bgA.classList.add("active");

    bgB.style.opacity = 0;
    bgB.classList.remove("active");
  }

  current = (current + 1) % images.length;
  isAActive = !isAActive;
}

// Set initial background
bgA.style.backgroundImage = `url(${images[0]})`;
bgA.style.opacity = 1;
bgA.classList.add("active");

// Start rotation
setInterval(crossfade, 5000);
