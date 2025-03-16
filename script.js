document.getElementById('join-btn').addEventListener('click', function() {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  const video = document.getElementById('bec-video');
  
  // Confetti burst
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff9900', '#4a2c0f', '#f5e8c7']
  });

  // Play video with sound after user interaction
  video.play();
  playMeow(); // Play meow sound on video start

  splash.style.opacity = '0';
  setTimeout(() => {
    splash.classList.add('hidden');
    main.classList.remove('hidden');
  }, 1000);
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const contract = document.getElementById('contract-address').textContent;
  navigator.clipboard.writeText(contract).then(() => {
    const feedback = document.getElementById('copy-feedback');
    feedback.classList.remove('hidden');
    setTimeout(() => feedback.classList.add('hidden'), 2000);
    playMeow(); // Play meow sound on copy
    playWoof(); // Play woof sound for fun
  });
});

// Image rotation for dancing-cat
const dancingImage = document.getElementById('dancing-image');
const images = ['becdog.gif', 'bec2.jpg', 'becdog.gif', 'bec3.jpg']; // Add more .jpeg files as needed
let currentIndex = 0;

function rotateImage() {
  dancingImage.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(rotateImage, 5000); // Change image every 5 seconds

// Audio Functions (Fix for CORS or URL issues)
function playMeow() {
  const meow = new Audio('https://www.myinstants.com/media/sounds/cat-meow-1.mp3');
  meow.onerror = () => console.log('Meow sound failed to load');
  meow.play().catch(error => console.log('Meow play error:', error));
}

function playWoof() {
  const woof = new Audio('https://www.myinstants.com/media/sounds/dog-bark.mp3');
  woof.onerror = () => console.log('Woof sound failed to load');
  woof.play().catch(error => console.log('Woof play error:', error));
}

// Particle Effects
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ff9900' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: false },
    move: { enable: true, speed: 2, direction: 'bottom', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});
