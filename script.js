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
  
  document.getElementById('copy-btn').addEventListener('click', function() {
    const contract = document.getElementById('contract-address').textContent;
    navigator.clipboard.writeText(contract).then(() => {
      const feedback = document.getElementById('copy-feedback');
      feedback.classList.remove('hidden');
      setTimeout(() => feedback.classList.add('hidden'), 2000);
      const woof = new Audio('https://www.myinstants.com/media/sounds/dog-bark.mp3');
      woof.play();
    });
  });