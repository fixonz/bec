document.getElementById('join-btn').addEventListener('click', function() {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  
  // Confetti burst
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff9900', '#4a2c0f', '#f5e8c7']
  });

  splash.style.opacity = '0';
  setTimeout(() => {
    splash.classList.add('hidden');
    main.classList.remove('hidden');
  }, 1000);
});

document.getElementById('play-video-btn').addEventListener('click', function() {
  const video = document.getElementById('bec-video');
  video.play();
  this.style.display = 'none';
  const meow = new Audio('https://www.myinstants.com/media/sounds/cat-meow-1.mp3'); // Changed to cat sound
  meow.play();
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const contract = document.getElementById('contract-address').textContent;
  navigator.clipboard.writeText(contract).then(() => {
    const feedback = document.getElementById('copy-feedback');
    feedback.classList.remove('hidden');
    setTimeout(() => feedback.classList.add('hidden'), 2000);
    const meow = new Audio('https://www.myinstants.com/media/sounds/cat-meow-1.mp3'); // Changed to cat sound
    meow.play();
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
