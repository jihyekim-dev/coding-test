function solution(a, b) {
  // a / b가 유한소수면 1, 아니면 2를 return
  // 기약분수 상태일 때, 분모의 소인수가 2와 5만 존재
  let gcd = 0;
  for (let i = 0; i <= b; i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  b = Number.isInteger(a / gcd) ? b / gcd : b;

  while (b % 2 === 0 || b % 5 === 0) {
    b = b % 2 === 0 ? b / 2 : b / 5;
  }
  return b === 1 ? 1 : 2;
}
