function launchHuddleRoom() {
    try {
        console.log('Launching Huddle Room...'); // Debug point
        const statusElement = document.getElementById('huddle-status');
        if (!statusElement) throw new Error('Huddle status element not found');

        statusElement.textContent = 'Launching Huddle Room...';

        // Create modal
        const modal = document.createElement('div');
        modal.id = 'huddle-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        const roomContent = document.createElement('div');
        roomContent.style.cssText = `
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            position: relative;
        `;

        // Basic Content
        const title = document.createElement('h3');
        title.textContent = 'Huddle Room (Test)';
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.cssText = `position: absolute; top: 10px; left: 10px; padding: 5px 10px;`;
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
            statusElement.textContent = 'Huddle Room Closed';
        };

        roomContent.appendChild(title);
        roomContent.appendChild(closeBtn);
        modal.appendChild(roomContent);
        document.body.appendChild(modal);

        setTimeout(() => {
            statusElement.textContent = 'Huddle Room Active';
        }, 1000);

    } catch (e) {
        console.error('Huddle Room Launch Error:', e);
        statusElement.textContent = 'Huddle Room Launch Failed - Check Console';
    }
}
