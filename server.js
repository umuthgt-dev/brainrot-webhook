const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 'Webhook API calisiyor' });
});

app.post('/add-server', (req, res) => {
    const { jobId, players, botId, brainrots } = req.body;
    
    console.log('=======================================');
    console.log('🎯 YENİ BRAINROT BULUNDU!');
    console.log('=======================================');
    console.log('Job ID:', jobId);
    console.log('Oyuncu Sayısı:', players);
    console.log('Bot:', botId);
    console.log('---------------------------------------');
    
    if (brainrots && brainrots.length > 0) {
        brainrots.forEach(b => {
            console.log(`  ${b.tier.toUpperCase()} - ${b.name}: ${b.gen}`);
        });
    }
    
    console.log('=======================================\n');
    
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Webhook API ${PORT} portunda calisiyor`);
});
