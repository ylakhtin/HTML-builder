const fs = require('fs');
const path = require('path');
const { stdout } = process;

fs.readFile(
  path.join(__dirname, 'text.txt'),
  'utf-8',
  (err, data) => {
    if (err) {
      throw err;
    } else {
      stdout.write(data);
    }
  }
);