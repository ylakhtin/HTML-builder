const fs = require('fs');
const path = require('path');
const { stdout } = process;

const reading = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
reading.on('data', (input) => stdout.write(input));