// Function to open curtains
function openCurtains() {
  const container = document.getElementById('curtainContainer');
  container.classList.add('open');
}

// Function to close and re-open (e.g., when switching theaters/pages)
function triggerCurtainTransition(onCompleteCallback) {
  const container = document.getElementById('curtainContainer');
  
  // Close curtains
  container.classList.remove('open');
  
  // Wait for close animation, then open again (and execute page change)
  setTimeout(() => {
    if (typeof onCompleteCallback === 'function') {
      onCompleteCallback();
    }
    container.classList.add('open');
  }, 1200); // Matches the 1.2s CSS transition duration
}

// Auto-open curtains when page finishes loading
window.addEventListener('DOMContentLoaded', () => {
  // Small delay for cinematic entrance
  setTimeout(openCurtains, 300);
});

