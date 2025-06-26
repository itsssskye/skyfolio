const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    // Randomly choose -15deg or 15deg
    const direction = Math.random() < 0.5 ? -15 : 15;
    link.style.transform = `rotate(${direction}deg)`;
  });

  link.addEventListener('mouseleave', () => {
    // Reset rotation when not hovering
    link.style.transform = 'rotate(0deg)';
  });
});