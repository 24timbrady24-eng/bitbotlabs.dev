function launchHuddleRoom() {
    try {
        console.log('Launching Huddle Room...'); // Debug point
        const statusElement = document.getElementById('huddle-status');
        if (!statusElement) throw new Error('Huddle status element not found');

        statusElement.innerHTML = '<span class="loader"></span> Launching...'; // Spinner during launch

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
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        setTimeout(() => {
            modal.style.opacity = '1'; // Animated fade-in
        }, 10);

        const roomContent = document.createElement('div');
        roomContent.style.cssText = `
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            position: relative;
        `;
        roomContent.innerHTML = `
            <h3 style="font-size: 1.6rem; margin-bottom: 10px;">🚀 Huddle Room Initiated</h3>
            <p style="margin-bottom: 20px;">Welcome to your real-time workspace. Ready to deploy ideas.</p>
        `; // Styled content

        // Circle Indicator (placeholder for now)
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            background: #0d6efd;
            border-radius: 50%;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        `;
        indicator.textContent = '0'; // Placeholder count

        // Close Button with upgraded styling
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 6px 12px;
            border: none;
            background-color: #1d4ed8;
            color: white;
            border-radius: 4px;
            cursor: pointer;
        `;
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
            statusElement.textContent = 'Huddle Room Closed';
        };

        // ESC Key to Close
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                statusElement.textContent = 'Huddle Room Closed';
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

        // Assemble Modal
        roomContent.appendChild(indicator);
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
