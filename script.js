// Hamburger mobile nav toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if(hamburger && menu) {
  hamburger.onclick = function() {
    menu.classList.toggle('show');
  };
}

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
    document.querySelectorAll('.fade-in').forEach(sec => {
      const pos = sec.getBoundingClientRect().top;
      const win = window.innerHeight;
      if (pos < win - 90) sec.classList.add('visible');
    });
  }
  revealSections(); 
  window.addEventListener("scroll", revealSections);

document.querySelectorAll('.skill-card').forEach(function(row) {
  const pct = row.getAttribute('data-pct') || 0;
  row.style.setProperty('--pct', pct);
  const bar = row.querySelector('.skill-bar');
  if(bar) bar.style.width = "0";
  function showBar() { if(bar) { void bar.offsetWidth; bar.style.width = pct + '%'; } }
  function hideBar() { if(bar) bar.style.width = "0"; }
  row.addEventListener('mouseenter', showBar);
  row.addEventListener('mouseleave', hideBar);
  row.addEventListener('focusin', showBar);
  row.addEventListener('focusout', hideBar);
  row.addEventListener('touchstart', showBar, {passive:true});
  row.addEventListener('touchend', hideBar, {passive:true});
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
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  }