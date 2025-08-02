document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded at:', new Date());
    const deployButton = document.querySelector('#deploy-btn');
    const statusDiv = document.querySelector('#bibbot-status');
    if (deployButton && statusDiv) {
        deployButton.addEventListener('click', function() {
            console.log('BibBot deployment started!');
            this.textContent = 'Deploying...';
            statusDiv.textContent = 'Status: Deploying';
            setTimeout(() => {
                statusDiv.textContent = 'Status: Deployed';
                console.log('BibBot deployed successfully!');
                this.textContent = 'Deploy BibBot';
            }, 1000);
        });
    } else {
        console.log('Button or status not found!');
    }
    // Assuming Lifebits are populated elsewhere, this is just a placeholder
    const lifebitsList = document.querySelector('#lifebits-list');
    if (lifebitsList) {
        lifebitsList.innerHTML = '<li>Lifebit 1: Active</li><li>Lifebit 2: Confirmed</li>';
    }
});
