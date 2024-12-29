function solution(X, Y) {
  // 정수 문자열 X, Y의 짝꿍 문자열 구하기
  // 짝꿍이 존재하지 않으면, -1 / 0으로만 구성되어 있다면, 0 return
  const short = X.length > Y.length ? Y : X;
  const long = [...(X.length > Y.length ? X : Y)];
  let pair = '';
  for (let i = 0; i < short.length; i++) {
    if (long.includes(short[i])) {
      pair += short[i];
      long.splice(long.indexOf(short[i]), 1).join('');
    }
  }

  return pair === ''
    ? '-1'
    : /^0+$/.test(pair)
    ? '0'
    : [...pair].sort((a, b) => b - a).join('');
}
