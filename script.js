document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded at:', new Date());
    console.log('DOM fully loaded, checking elements...');
    const deployButton = document.querySelector('#deploy-btn');
    console.log('Button found:', !!deployButton);
    const statusDiv = document.querySelector('#bibbot-status');
    console.log('Status div found:', !!statusDiv);
    if (deployButton && statusDiv) {
        deployButton.style.minWidth = '120px';
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
        console.log('One or more elements not found!');
    }
});
