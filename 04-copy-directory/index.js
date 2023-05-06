
function copyDir(){
  const fs = require('fs');
  const path = require('path');

  fs.rm(path.join(__dirname, 'files-copy'), { force: true, recursive: true }, () => {
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (error) => {
      if (error) {
        throw error;
      } else {
        fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true }, (err, files) => {
          if(err) {
            throw err;
          } else {
            files.forEach(element => {
              fs.copyFile(path.join(__dirname, 'files', element.name), path.join(__dirname, 'files-copy', element.name), ()=>{});
            });
          }
        });
      }
    });
  });
}

copyDir();