// Enhanced Debug Script
try {
    console.log('Script attempt to load at:', new Date().toISOString()); // Timestamp for load
    if (typeof window !== 'undefined') {
        console.log('Window object exists, proceeding...');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM ready at:', new Date().toISOString()); // Timestamp for DOM

            // Test Lifebits
            const lifebitsList = document.getElementById('lifebits-list');
            console.log('Looking for lifebits-list:', lifebitsList);
            if (lifebitsList) {
                lifebitsList.innerHTML = '<li>Test Lifebit</li>';
                console.log('Lifebits test added at:', new Date().toISOString());
            } else {
                console.error('Lifebits list not found at:', new Date().toISOString());
            }

            // Test Huddle Room Button
            const launchBtn = document.querySelector('#huddle-room-triggers button');
            console.log('Looking for launch button:', launchBtn);
            if (launchBtn) {
                launchBtn.onclick = () => {
                    console.log('Huddle Room button clicked at:', new Date().toISOString());
                    const status = document.getElementById('huddle-status');
                    console.log('Looking for huddle-status:', status);
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
                        console.log('Modal created at:', new Date().toISOString());
                    } else {
                        console.error('Huddle status not found at:', new Date().toISOString());
                    }
                };
            } else {
                console.error('Huddle Room button not found at:', new Date().toISOString());
            }
        });
    } else {
        console.error('Window object not available, script halted at:', new Date().toISOString());
    }
} catch (e) {
    console.error('Script Error at:', new Date().toISOString(), e);
}
