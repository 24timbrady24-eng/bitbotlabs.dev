document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded at:', new Date());
    const deployButton = document.querySelector('#deploy-btn');
    if (deployButton) {
        deployButton.addEventListener('click', function() {
            console.log('BibBot deployment started!');
            const originalText = this.textContent; // Save original text
            this.textContent = 'Deploying...';
            const statusDiv = document.querySelector('#bibbot-status');
            if (statusDiv) {
                statusDiv.textContent = 'Status: Deploying';
                setTimeout(() => {
                    statusDiv.textContent = 'Status: Deployed';
                    console.log('BibBot deployed successfully!');
                    this.textContent = originalText; // Restore original text
                }, 1000);
            } else {
                console.log('Status div not found!');
            }
        });
    } else {
        console.log('Button not found!');
    }
});
