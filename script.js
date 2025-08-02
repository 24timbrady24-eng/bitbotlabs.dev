console.log('Script loaded at:', new Date());
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded at:', new Date());
  // Lifebits Win
  const lifebits = document.getElementById('lifebits-list');
  if (lifebits) {
    lifebits.innerHTML = '<li>Lifebit 1: Active</li><li>Lifebit 2: Active</li>';
    console.log('Lifebits added at:', new Date());
  }
  // BibBot Win
  const deployBtn = document.getElementById('deploy-btn');
  const status = document.getElementById('bibbot-status');
  if (deployBtn && status) {
    deployBtn.onclick = function() {
      console.log('Deploy clicked at:', new Date());
      status.textContent = 'Deploying...';
      setTimeout(() => {
        status.textContent = 'Deployed!';
        console.log('Deployed at:', new Date());
      }, 1000);
    };
  }
});
