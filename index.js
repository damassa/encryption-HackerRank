'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function encrypt(s) {
  const sqrt = Math.sqrt([...s].length);
  const ceil = Math.ceil(sqrt);

  return [...s].reduce((target, string, index) => {
    target[index % ceil] += string;

    return target;
  }, new Array(ceil).fill('')).join(' ');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
    const s = readLine();
    let result = encrypt(s);
    ws.write(result + "\n");
    ws.end();
}
