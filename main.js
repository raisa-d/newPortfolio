const clouds = document.querySelectorAll('.cloud');

clouds.forEach(cloud => {
    cloud.addEventListener('mouseover', startRain);
    cloud.addEventListener('mouseout', stopRain);
});

function randomText() {
    const text = '0123456789/\\|&+=-<>{}';
    const letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function createRaindrop(cloud) {
    let div = document.createElement('div');
    let left = Math.floor(Math.random() * 90);
    let size = Math.random() * 1;
    let duration = Math.random() * 1;

    div.classList.add('text');
    cloud.appendChild(div);
    div.innerText = randomText();
    div.style.left = (left * 0.1) + 'rem';
    div.style.fontSize = 0.5 + size + 'em';
    div.style.animationDuration = 1 + duration + 's';

    setTimeout(() => {
        cloud.removeChild(div);
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

// scrolling down animation
document.querySelectorAll('.scrolly a').forEach(a => a.addEventListener('click', scrollDown));

function scrollDown(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
        behavior:'smooth'
    })
}

/*
NOTES:
- change cloud related code to an object with methods to make it more readable
*/