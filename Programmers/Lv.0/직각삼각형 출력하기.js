const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const n = Number(input[0]);
  // 너비와 높이가 n인 직각이등변삼각형 출력
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
});
