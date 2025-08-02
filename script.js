console.log('Script loaded at:', new Date());
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded at:', new Date());
    const lifebitsList = document.getElementById('lifebits-list');
    if (lifebitsList) {
        lifebitsList.innerHTML = '<li>Lifebit 1: Active</li><li>Lifebit 2: Confirmed</li>';
        console.log('Lifebits updated at:', new Date());
    }
    const deployBtn = document.getElementById('deploy-btn');
    const statusDiv = document.getElementById('bibbot-status');
    if (deployBtn && statusDiv) {
        deployBtn.onclick = () => {
            console.log('Deploy clicked at:', new Date());
            statusDiv.textContent = 'Deploying...';
            setTimeout(() => {
                statusDiv.textContent = 'Deployed!';
                console.log('Deployed at:', new Date());
            }, 1000);
        };
    }
});
