document.addEventListener('mousemove', (event) => {
    const magicStick = document.querySelector('.magic-stick');
    const glitterContainer = document.getElementById('glitter-container');

    // Update magic stick position
    magicStick.style.left = `${event.clientX - 5}px`;
    magicStick.style.top = `${event.clientY - 20}px`;

    // Create glitter effect
    createGlitter(event.clientX - 1, event.clientY - 20);
});

function createGlitter(x, y) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = `${x}px`;
    glitter.style.top = `${y}px`;

    // Randomize glitter properties
    glitter.style.backgroundColor = getRandomColor();
    glitter.style.width = `${Math.random() * 4 + 2}px`;
    glitter.style.height = glitter.style.width;

    document.getElementById('glitter-container').appendChild(glitter);

    // Remove glitter element after animation
    setTimeout(() => {
        glitter.remove();
    }, 1000);
}

function getRandomColor() {
    const colors = ['gold', 'silver', '#ff69b4', '#00ffff', '#ff00ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
