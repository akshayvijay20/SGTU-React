

function updateContent() {
    const text = document.getElementById('updateText');

    // Array of update texts
    const updates = [
        'SGT University is now NAAC A+ Accredited',
        'Jai Vigyan, Jai Anusandhan: Synergy 2023 at SGT University Paves the Way Forward',
        'The Next Gen of Scientific Leaders Shine at SGT University',
    ];

    // Update content
    const randomIndex = Math.floor(Math.random() * updates.length);
    text.textContent = updates[randomIndex];
}

// Update content every 5 seconds
setInterval(updateContent, 5000);

