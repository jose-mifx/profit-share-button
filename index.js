const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/generate', async (req, res) => {
  try {
    const productName = req.query.productName || 'Unknown';
    const profit = req.query.profit || '0';

    // 1) Canvas Setup
    const width = 1080;
    const height = 1920;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 2) Background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // 3) Text: Product Name
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 60px sans-serif';
    ctx.fillText(`Trading ${productName} PROFIT`, width / 2, 200);

    // 4) Text: Profit
    const formattedProfit = parseFloat(profit).toLocaleString();
    ctx.font = 'bold 150px sans-serif';
    ctx.fillText(`$${formattedProfit}`, width / 2, height / 2);

    // 5) Sub-text “Profit”
    ctx.font = 'bold 60px sans-serif';
    ctx.fillText('Profit', width / 2, height / 2 + 100);

    // 6) Footer / Branding
    ctx.font = '30px sans-serif';
    ctx.fillText('Yuk, ikutan trading di MIFX!', width / 2, height - 100);

    // 7) Send PNG
    const buffer = canvas.toBuffer('image/png');
    res.set('Content-Type', 'image/png');
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating image.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
