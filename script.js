// Dashboard Sim Engine™ - Simulated logic for BotLogix™ Dashboard
try {
    // BitHumor™ Quotes Rotation
    const bitHumorQuotes = [
        "Why did the bit flip? To get to the other side!",
        "Bits walk into a bar: 'We're feeling a bit off today.'",
        "A bit's favorite music? Binary beats.",
        "Don't trust atoms, they make up everything... but bits make up data!"
    ];
    let quoteIndex = 0;
    function rotateQuote() {
        try {
            const quoteElement = document.getElementById('bithumor-quote');
            if (quoteElement) {
                quoteElement.textContent = bitHumorQuotes[quoteIndex];
                quoteIndex = (quoteIndex + 1) % bitHumorQuotes.length;
            }
        } catch (e) {
            console.error('BitHumor Rotation Error:', e);
        }
    }
    setInterval(rotateQuote, 5000);
    rotateQuote();

    // BibBot Deployment Controls
    function deployBibBot() {
        try {
            const statusElement = document.getElementById('bibbot-status');
            statusElement.textContent = 'Status: Deploying...';
            setTimeout(() => {
                statusElement.textContent = 'Status: Deployed Successfully!';
            }, 1500);
        } catch (e) {
            console.error('BibBot Deploy Error:', e);
        }
    }

    function checkBibBotStatus() {
        try {
            document.getElementById('bibbot-status').textContent = 'Status: Online and Operational';
        } catch (e) {
            console.error('BibBot Status Error:', e);
        }
    }

    // SKU Health Graph
    let skuChart;
    const skuData = {
        'SKU-TEST': [85, 90, 75, 80, 95],
        'SKU-001': [65, 70, 60, 75, 85]
    };

    function updateSKU() {
        try {
            const sku = document.getElementById('sku-select').value;
            const data = skuData[sku] || [0, 0, 0, 0, 0];
            const ctx = document.getElementById('skuChart').getContext('2d');

            if (skuChart) skuChart.destroy();
            skuChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                    datasets: [{
                        label: `${sku} Health`,
                        data: data,
                        borderColor: '#0d6efd',
                        backgroundColor: 'rgba(13, 110, 253, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true, max: 100, title: { display: true, text: 'Health Score' } },
                        x: { title: { display: true, text: 'Time' } }
                    },
                    plugins: { legend: { display: true } }
                }
            });
        } catch (e) {
            console.error('SKU Chart Error:', e);
        }
    }

    // Lifebits™
    const lifebitsData = [
        'Core Functionality: Stable',
        'User Engagement: High',
        'Performance: Optimized',
        'Security: Reinforced'
    ];

    function loadLifebits() {
        try {
            console.log('Loading Lifebits...'); // Debug: Confirm function runs
            const list = document.getElementById('lifebits-list');
            if (!list) {
                console.error('Lifebits list element not found!');
                return;
            }
            list.innerHTML = ''; // Clear existing
            lifebitsData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
            });
            console.log('Lifebits loaded successfully');
        } catch (e) {
            console.error('Lifebits Error:', e);
        }
    }

    // Hidden Cost Analyzer™
    function analyzeCosts() {
        try {
            const baseCost = parseFloat(document.getElementById('cost-input').value) || 0;
            const hiddenCosts = baseCost * 0.2 + Math.random() * 100;
            document.getElementById('cost-output').textContent = `Hidden Costs: $${hiddenCosts.toFixed(2)} (20% overhead + variables)`;
        } catch (e) {
            console.error('Hidden Cost Analyzer Error:', e);
        }
    }

    // Huddle Room Core Framework
    const avatars = [
        { name: "Strategix", src: "avatars/strategix.png" },
        { name: "Emotiq", src: "avatars/emotiq.png" },
        { name: "Taskr", src: "avatars/taskr.png" }
    ];
    let selectedBots = [];

    function launchHuddleRoom() {
        try {
            console.log('Launching Huddle Room Config...'); // Debug: Function start
            const modal = document.getElementById('huddle-config-modal');
            const content = document.getElementById('huddle-config-content');
            if (!modal || !content) {
                console.error('Modal or content element not found!');
                return;
            }
            const roomName = document.getElementById('room-name');
            roomName.textContent = `${document.getElementById('team-name-input').value || 'Team Alpha'} Huddle Room Config`;
            const botList = document.querySelector('.bot-avatar-list');
            botList.innerHTML = '';

            // Populate avatar roster
            avatars.forEach(avatar => {
                const btn = document.createElement('div');
                btn.className = 'bot-avatar';
                btn.textContent = avatar.name.charAt(0);
                btn.dataset.name = avatar.name;
                btn.title = avatar.name;
                btn.onclick = () => {
                    const index = selectedBots.indexOf(avatar.name);
                    if (index === -1) {
                        selectedBots.push(avatar.name);
                        btn.classList.add('selected');
                    } else {
                        selectedBots.splice(index, 1);
                        btn.classList.remove('selected');
                    }
                };
                botList.appendChild(btn);
            });

            // Show modal with animation
            modal.style.display = 'block';
            setTimeout(() => content.classList.add('active'), 10);

            // Handle form submission
            const form = document.getElementById('huddle-config');
            form.onsubmit = (e) => {
                e.preventDefault();
                const size = form.size.value;
                const theme = form.theme.value;
                console.log(`Deploying room: Size=${size}, Theme=${theme}, Bots=${selectedBots.join(', ')}`);
                modal.style.display = 'none';
                content.classList.remove('active');

                // Simulate room launch
                const statusElement = document.getElementById('huddle-status');
                statusElement.textContent = 'Huddle Room Deployed!';
                setTimeout(() => statusElement.textContent = 'Ready for launch', 2000);
            };

            // Close modal
            document.getElementById('close-config').onclick = () => {
                modal.style.display = 'none';
                content.classList.remove('active');
                selectedBots = [];
            };

        } catch (e) {
            console.error('Huddle Room Config Error:', e);
            document.getElementById('huddle-status').textContent = 'Config Failed - Check Console';
        }
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        try {
            console.log('DOM loaded, initializing...'); // Debug: Confirm DOM ready
            document.getElementById('sku-select').value = 'SKU-TEST';
            updateSKU();
            loadLifebits();
        } catch (e) {
            console.error('Initialization Error:', e);
        }
    });

} catch (e) {
    console.error('Dashboard Sim Engine Error:', e);
}
