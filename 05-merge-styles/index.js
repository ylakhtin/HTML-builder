const fs = require('fs');
const path = require('path');

function mergeStyles() {
  // Delete bundle.css
  fs.unlink(path.join(__dirname, 'project-dist', 'bundle.css'), () => {});
  // Read styles source folder
  fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
    if(err) {
      throw err;
    } else {
      files.forEach(element => {
        if (element.isFile() && path.extname(element.name).slice(1, path.extname(element.name).length) === 'css'){
          // Read current file and put it to array
          const reading = fs.createReadStream(path.join(__dirname, 'styles', element.name), 'utf-8');
          reading.on('data', (input) => {
            // Write destination file
            fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), input.toString(), ()=>{});
          });
        }
      });
    }
  });
}

mergeStyles();