let clickCount = 0;

document.getElementById('clicker-button').addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
});
