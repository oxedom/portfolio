const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.dirname(process.argv[1]);

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach(file => {
    if (file.match(/\.(png|jpe?g|gif)$/)) {
      const filePath = path.join(directoryPath, file);

      sharp(filePath)
        .resize(800) // specify the desired width here
        .toFile(path.join(directoryPath, `resized-${file}`), (err, info) => {
          if (err) {
            console.error(`Error resizing ${file}: ${err}`);
          } else {
            console.log(`${file} was resized to ${info.width}x${info.height}`);
          }
        });
    }
  });
});

