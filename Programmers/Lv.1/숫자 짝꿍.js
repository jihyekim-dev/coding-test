function solution(X, Y) {
  // 문자열 정수 X와 Y의 짝꿍 문자열 return
  // 짝꿍이 존재하지 않으면, '-1' / 0으로만 구성되었다면 '0' return
  // X, Y에서 공통으로 나타나는 정수 = 0~9 사이의 정수
  const duplication = new Map();
  for (let i = 0; i < X.length; i++) {
    let v = duplication.get(X[i]);
    !v ? duplication.set(X[i], 1) : duplication.set(X[i], ++v);
  }

  let pair = '';
  for (let i = 0; i < Y.length; i++) {
    const k = Y[i];
    let v = duplication.get(k);

    if (v) {
      pair += k;
      !(v - 1) ? duplication.delete(k) : duplication.set(k, --v);
    }
  }

  return pair === ''
    ? '-1'
    : /^0+$/.test(pair)
    ? '0'
    : [...pair].sort((a, b) => b - a).join('');
}
