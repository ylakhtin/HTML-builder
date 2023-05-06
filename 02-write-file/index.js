const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

stdout.write('Hey there! Please, input your data!\r\n');
const inputFile = fs.createWriteStream(path.join(__dirname, 'target.txt'), 'utf-8');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit'){
    process.exit(1);
  } else {
    inputFile.write(data.toString());
  }
});

process.on('exit', () => {
  console.log('Bye!');
  stdout.write('Bye!');
});