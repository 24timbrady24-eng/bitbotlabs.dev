document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded at:', new Date());
    const deployButton = document.querySelector('#deploy-btn');
    const statusDiv = document.querySelector('#bibbot-status');
    if (deployButton && statusDiv) {
        deployButton.style.minWidth = '120px'; // Prevent button width change
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
});
