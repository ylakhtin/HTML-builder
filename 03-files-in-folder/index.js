const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'secret-folder');

async function printFiles(files) {
  files.forEach(async (element) => {
    if (element.isFile()) {
      fs.stat(path.join(dirPath, element.name), async (err, stats)=>{
        if(err) {
          throw err;
        }
        let fSize = await stats['size'];
        console.log(`${element.name} - ${path.extname(element.name).slice(1, path.extname(element.name).length)} - ${fSize}`);
      });
    }
  });
}

fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
  if(err) {
    throw err;
  } else {
    printFiles(files);
  }
});