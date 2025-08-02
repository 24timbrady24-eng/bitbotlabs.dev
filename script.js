console.log('Script loaded at:', new Date());document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded at:', new Date()); // Line one
    const deployButton = document.querySelector('#bibbot-controls .deploy-button');
    if (deployButton) {
        deployButton.addEventListener('click', function() {
            console.log('BibBot deployed successfully!');
            this.nextElementSibling.textContent = 'Deployed! Ready';
        });
    } else {
        console.log('Button not found!');
    }
});
