const clouds = document.querySelectorAll('.cloud');

clouds.forEach(cloud => {
    cloud.addEventListener('mouseover', startRain);
    cloud.addEventListener('mouseleave', stopRain);
});

function randomText() {
    const text = '0123456789/\\|&+=-<>{}';
    const letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function createRaindrop(cloud) {
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 90);
    let size = Math.random() * 1;
    let duration = Math.random() * 1;

    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = randomText();
    e.style.left = (left * 0.1) + 'rem';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(() => {
        cloud.removeChild(e);
    }, 2000);
}

function startRain() {
    const cloud = this;
    createRaindrop(cloud);
    cloud.rainInterval = setInterval(() => {
        createRaindrop(cloud);
    }, 100);
}

function stopRain() {
    const cloud = this;
    clearInterval(cloud.rainInterval);
}