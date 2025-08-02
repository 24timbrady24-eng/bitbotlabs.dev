// Replace the existing launchHuddleRoom function in script.js
function launchHuddleRoom() {
    try {
        const statusElement = document.getElementById('huddle-status');
        if (!statusElement) throw new Error('Huddle status element not found');

        statusElement.textContent = 'Launching Huddle Room...';

        // Create modal for Huddle Room
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

        // Circle Indicator
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
        indicator.textContent = invitedBots.length || 0;

        // Team Name
        const teamName = document.getElementById('team-name-input').value || 'Team Alpha';
        const title = document.createElement('h3');
        title.textContent = `${teamName} Huddle Room`;

        // Room Type Selection
        const roomSelect = document.createElement('select');
        roomSelect.innerHTML = `
            <option value="small">Small Meeting (1-2 Bots)</option>
            <option value="large">Large Conference (Up to 5 Bots)</option>
        `;

        // Bot Face Placeholders
        const botContainer = document.createElement('div');
        botContainer.id = 'bot-container';
        botContainer.style.cssText = `display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px;`;

        function updateRoom(roomType, bots) {
            botContainer.innerHTML = '';
            const maxBots = roomType === 'small' ? 2 : 5;
            const displayBots = bots.slice(0, maxBots);
            indicator.textContent = displayBots.length;
            displayBots.forEach(bot => {
                const botWindow = document.createElement('div');
                botWindow.className = 'bot-window';
                botWindow.textContent = `${bot.name} (${bot.personality})`;
                botContainer.appendChild(botWindow);
            });
            if (displayBots.length < maxBots) {
                for (let i = displayBots.length; i < maxBots; i++) {
                    const emptyWindow = document.createElement('div');
                    emptyWindow.className = 'bot-window';
                    emptyWindow.textContent = 'Empty Slot';
                    botContainer.appendChild(emptyWindow);
                }
            }
        }

        // Close Button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.cssText = `position: absolute; top: 10px; left: 10px; padding: 5px 10px;`;
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
            statusElement.textContent = 'Huddle Room Closed';
            invitedBots = [];
        };

        // Assemble Modal
        roomContent.appendChild(indicator);
        roomContent.appendChild(title);
        roomContent.appendChild(roomSelect);
        roomContent.appendChild(botContainer);
        roomContent.appendChild(closeBtn);
        modal.appendChild(roomContent);
        document.body.appendChild(modal);

        // Initial Room Setup
        updateRoom('small', invitedBots);

        setTimeout(() => {
            statusElement.textContent = 'Huddle Room Active';
        }, 1000);

    } catch (e) {
        console.error('Huddle Room Launch Error:', e);
        statusElement.textContent = 'Huddle Room Launch Failed - Check Console';
    }
}
