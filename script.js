// Toggle navbar collapse
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const headerHeight = document.querySelector('.navbar').offsetHeight;

anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});
