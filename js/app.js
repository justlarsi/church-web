document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.brief, .text-column h3').forEach(element => {
    element.classList.add('show');
  });


 // FOR BANNER
  const bannerText = document.querySelector('.banner h1');
  setTimeout(() => {
    bannerText.classList.add('show');
    bannerText.querySelectorAll('span').forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('show');
      }, index * 100);
    });
  }, 500);
  bannerText.addEventListener('mouseover', () => {
    bannerText.style.transform = 'scale(1.1)';
  });
  bannerText.addEventListener('mouseout', () => {
    bannerText.style.transform = 'scale(1)';
  });

  // FOR NAVIGATION LINKS
  const navLinks = document.querySelectorAll('.navigation a');
  const navUl = document.querySelector('.navigation ul');
  navUl.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      const targetId = e.target.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
