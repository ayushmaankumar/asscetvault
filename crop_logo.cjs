const { Jimp } = require('jimp');
const path = require('path');

async function process() {
  const inputPath = "C:\\Users\\MOTILAL PRASAD\\.gemini\\antigravity\\brain\\c86634c3-8d19-4d2a-9d6f-7afb8c0ee253\\media__1778215750285.png";
  const outputPath = path.join(__dirname, 'logo_cropped.png');
  
  try {
    console.log('Reading from:', inputPath);
    const image = await Jimp.read(inputPath);
    
    console.log('Autocropping...');
    image.autocrop();
    
    console.log('Writing to:', outputPath);
    // In Jimp 1.6+, write returns a promise
    await image.write(outputPath);
    console.log('Successfully cropped logo.');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

process();
