// Dynamic navbar background on scroll
const header = document.querySelector('header');
const progressLine = header;

window.addEventListener('scroll', () => {
  // Navbar background activation
  if (window.scrollY > 5) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Progress line animation
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / documentHeight) * 100;
  
  // Apply scroll percentage to progress line width
  progressLine.style.setProperty('--progress-width', `${Math.min(scrollPercent, 100)}%`);
});

// Update CSS custom property for progress line
const style = document.createElement('style');
style.textContent = `
  header::before {
    width: var(--progress-width, 0%) !important;
  }
`;
document.head.appendChild(style);

// Section animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  function revealSections() {
    document.querySelectorAll('.fade-in').forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  revealSections();
});

// Skills bar animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillRows = document.querySelectorAll('.skill-row');
  const skillsSection = document.getElementById('skills');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillRows.forEach(row => {
          const pct = row.dataset.percentage;
          const bar = row.querySelector('.skill-bar');
          if (bar) {
            bar.style.width = pct + '%';
          }
        });
        observer.unobserve(entry.target);
      }
    });
  };

  if (skillsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(skillsSection);
  }

  skillRows.forEach(row => {
    const pct = row.dataset.percentage;
    const bar = row.querySelector('.skill-bar');
    if (bar) bar.style.width = "0";

    function showBar() {
      if (bar) {
        void bar.offsetWidth;
        bar.style.width = pct + '%';
      }
    }

    function hideBar() {
      if (bar) bar.style.width = "0";
    }

    row.addEventListener('mouseenter', showBar);
    row.addEventListener('mouseleave', hideBar);
    row.addEventListener('focusin', showBar);
    row.addEventListener('focusout', hideBar);
    row.addEventListener('touchstart', showBar, {
      passive: true
    });
    row.addEventListener('touchend', hideBar, {
      passive: true
    });
  });
});

// New code for "My Journey" tabs
const journeyTabsContainer = document.querySelector('.journey-tabs');
const journeyTabs = document.querySelectorAll('.journey-tab-item');
const journeyPanels = document.querySelectorAll('.journey-panel');

if (journeyTabsContainer) {
  journeyTabsContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.journey-tab-item');
    if (!clickedTab) return;

    // Deactivate all tabs and panels
    journeyTabs.forEach(tab => tab.classList.remove('active'));
    journeyPanels.forEach(panel => panel.classList.remove('active'));

    // Activate the clicked tab
    clickedTab.classList.add('active');

    // Activate the corresponding content panel
    const targetId = clickedTab.dataset.target;
    document.getElementById(targetId).classList.add('active');
  });
}
window.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});

// Smooth-scroll with header offset for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const headerOffset = 80; // fixed header height
  const links = document.querySelectorAll('#menu a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        history.pushState(null, '', hash);
      }
    });
  });
});