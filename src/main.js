import './style.css';

// Smooth cross-page transition engine
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease-out';

window.requestAnimationFrame(() => {
  document.body.style.opacity = '1';
});

// Intercept clicks to simulate SPA fade-out transitions
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a || !a.href) return;
  
  // Only intercept same-origin links
  if (a.origin !== window.location.origin) return;
  
  // Ignore links that open in new tabs or aren't standard web protocols
  if (a.target === '_blank') return;
  if (a.protocol !== 'http:' && a.protocol !== 'https:') return;

  const isSamePage = a.pathname === window.location.pathname;

  // Let normal smooth anchor scrolling handle same-page hashes
  if (isSamePage && a.hash) {
    return;
  }

  // Fade out before navigating
  e.preventDefault();
  document.body.style.opacity = '0';
  
  setTimeout(() => {
    window.location.href = a.href;
  }, 350);
});

// Ensure returning via browser Back button un-fades the screen
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.style.opacity = '1';
  }
});
