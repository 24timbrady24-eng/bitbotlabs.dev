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
            const list = document.getElementById('lifebits-list');
            lifebitsData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
            });
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

    // Huddle Room Directory and Launcher Logic
    let invitedBots = [];

    function launchHuddleRoom() {
    try {
        console.log('Function triggered!'); // First debug point
        const statusElement = document.getElementById('huddle-status');
        if (!statusElement) {
            console.error('Status element not found!');
            return;
        }
        console.log('Status element found:', statusElement); // Second debug point
        statusElement.textContent = 'Attempting to launch...';

        // Minimal modal test
        const modal = document.createElement('div');
        modal.id = 'huddle-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000;';
        const content = document.createElement('div');
        content.style.cssText = 'background: white; padding: 20px; margin: auto;';
        content.textContent = 'Test Modal';
        modal.appendChild(content);
        document.body.appendChild(modal);
        console.log('Modal added to body'); // Third debug point

    } catch (e) {
        console.error('Launch Error:', e);
        statusElement.textContent = 'Launch Failed - Check Console';
    }
}

    // Bot Directory Interaction
    const bots = [
        { name:
