process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const num = data.split(' ');
  const n = Number(num[0]),
    m = Number(num[1]);

  // 가로 길이 n, 세로 길이 m인 직사각형 출력
  for (let i = 0; i < m; i++) {
    console.log('*'.repeat(n));
  }
});
