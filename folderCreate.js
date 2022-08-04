const fs = require('fs');
const path = require('path');

const start = 1;
const end = 50;

for (let i = start; i <= end; i++) {
  const dirPath = path.join(__dirname, `${i}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  } else {
    console.log(`${dirPath} already exists`);
  }
}
