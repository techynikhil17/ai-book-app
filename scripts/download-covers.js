const https = require('https');
const fs = require('fs');
const path = require('path');

const coverUrls = {
  'midnight-library': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg',
  'project-hail-mary': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg',
  'atomic-habits': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
  'dune': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
  'psychology-of-money': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg',
  'foundation': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1417900846i/29579.jpg',
  'snow-crash': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477624625i/830.jpg',
  'neuromancer': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg',
  'three-body-problem': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg',
  'ready-player-one': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500930947i/9969571.jpg'
};

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '..', 'public', 'images', 'books', filename);
  const dir = path.dirname(filepath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

Object.entries(coverUrls).forEach(([name, url]) => {
  downloadImage(url, `${name}.jpg`);
}); 