// Updated Debug Script
try {
    console.log('Script is here!'); // Confirm script runs
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Page is ready!'); // Confirm page load
        document.getElementById('huddle-status').textContent = 'JavaScript is alive!'; // Change status
        console.log('Status updated!');

        // Define launchHuddleRoom function
        window.launchHuddleRoom = function() {
            console.log('Launch Huddle Room clicked!'); // Debug click
            const modal = document.getElementById('huddle-config-modal');
            if (modal) {
                modal.style.display = 'block'; // Show modal
                console.log('Modal displayed!');
            } else {
                console.error('Modal not found!');
            }
            const status = document.getElementById('huddle-status');
            if (status) status.textContent = 'Launching...';
        };

        // Verify button
        const launchBtn = document.querySelector('#huddle-room-triggers button');
        console.log('Looking for launch button:', launchBtn);
        if (launchBtn) {
            console.log('Button found, onclick set to launchHuddleRoom');
        } else {
            console.error('Launch button not found!');
        }
    });
} catch (e) {
    console.error('Script failed:', e);
}
