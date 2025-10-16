// JavaScript for new community website design interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple visit counter
  let visitCount = localStorage.getItem('visitCount') || 0;
  visitCount++;
  localStorage.setItem('visitCount', visitCount);
  console.log(`This page has been visited ${visitCount} times.`);
});
