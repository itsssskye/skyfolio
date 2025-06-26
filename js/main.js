document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    // Randomly choose -30deg or 30deg
    const rotateDeg = Math.random() < 0.5 ? -30 : 30;
    link.style.transform = `rotate(${rotateDeg}deg)`;
  });

  link.addEventListener('mouseleave', () => {
    // Reset rotation when not hovering
    link.style.transform = 'rotate(0deg)';
  });
});