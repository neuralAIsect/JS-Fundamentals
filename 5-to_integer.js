#!/usr/bin/node

let firstArg = process.argv[2];
let secondArg = Number(firstArg);

if (isNaN(secondArg)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(firstArg));
}