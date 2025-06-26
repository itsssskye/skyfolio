const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    // Randomly choose -10deg or 10deg
    const direction = Math.random() < 0.5 ? -10 : 10;
    link.style.transform = `rotate(${direction}deg)`;
  });

  link.addEventListener('mouseleave', () => {
    // Reset rotation when not hovering
    link.style.transform = 'rotate(0deg)';
  });
});