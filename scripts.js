document.getElementById('spin-button').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const degrees = Math.floor(Math.random() * 360) + 720; // Random angle between 720 and 1080 degrees
    wheel.style.transform = `rotate(${degrees}deg)`;
});
