// Super Basic Test Script
console.log('Script is here!'); // Should show immediately
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page is ready!'); // Should show when page loads
    document.getElementById('huddle-status').textContent = 'JavaScript is alive!'; // Change status text
    const button = document.querySelector('#huddle-room-triggers button');
    if (button) {
        button.onclick = function() {
            console.log('Button pressed!');
            alert('Huddle Room Test Pop-up!'); // Simple pop-up
        };
    } else {
        console.error('Button not found!');
    }
});
