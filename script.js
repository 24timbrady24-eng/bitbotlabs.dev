// Minimal Debug Script
try {
    console.log('Script loaded successfully!'); // Confirm script runs
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM ready, initializing...'); // Confirm DOM loaded

        // Test Lifebits
        const lifebitsList = document.getElementById('lifebits-list');
        if (lifebitsList) {
            lifebitsList.innerHTML = '<li>Test Lifebit</li>'; // Fixed: Single li item
            console.log('Lifebits test added');
        } else {
            console.error('Lifebits list not found!');
        }

        // Test Huddle Room Button
        const launchBtn = document.querySelector('#huddle-room-triggers button');
        if (launchBtn) {
            launchBtn.onclick = () => {
                console.log('Huddle Room button clicked!');
                const status = document.getElementById('huddle-status');
                if (status) {
                    status.textContent = 'Launching...';
                    const modal = document.createElement('div');
                    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000;';
                    const content = document.createElement('div');
                    content.style.cssText = 'background: white; padding: 20px; margin: 50px auto; width: 300px;';
                    content.textContent = 'Huddle Room Test';
                    const closeBtn = document.createElement('button');
                    closeBtn.textContent = 'Close';
                    closeBtn.style.cssText = 'margin-top: 10px; padding: 5px 10px;';
                    closeBtn.onclick = () => {
                        document.body.removeChild(modal);
                        status.textContent = 'Huddle Room Closed';
                    };
                    content.appendChild(closeBtn);
                    modal.appendChild(content);
                    document.body.appendChild(modal);
                    console.log('Modal created');
                } else {
                    console.error('Huddle status not found!');
                }
            };
        } else {
            console.error('Huddle Room button not found!');
        }
    });
} catch (e) {
    console.error('Script Error:', e);
}
