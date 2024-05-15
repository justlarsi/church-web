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

// HOMEPAGE SCROLL TO TOP
document.getElementById('refreshLink').addEventListener('click', function(event) {
    event.preventDefault();
    // window.location.reload();
    window.scrollTo(-100000, 0);
});


  // NAVIGATION
    function goToHomePage() {
    window.location.href="index.html";
    }
    function goToAboutPage() {
    window.location.href="about.html";
    }
    function goToEventsPage() {
    window.location.href="events.html";
  }
    function goToVisitPage() {
    window.location.href="visit.html";
  }
    function goToMinistriesPage() {
    window.location.href="ministries.html";
  }
    function goToSermonPage() {
    window.location.href="sermons.html";
  }
    function goToGivePage() {
    window.location.href="give.html";
  }
