document.addEventListener('DOMContentLoaded', () => {
    const ball = document.querySelector('.ball');
    const colors = ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6'];
    let currentColorIndex = 0;

    ball.addEventListener('animationiteration', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        ball.style.backgroundColor = colors[currentColorIndex];
    });
});
