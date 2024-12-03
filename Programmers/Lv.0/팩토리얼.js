function factorial(i) {
  if (i === 1) return 1;
  return i * factorial(i - 1);
}

function solution(n) {
  // n과 가장 가까운 팩토리얼 값을 가진 i return
  let i = 1;
  let result = 1;
  while (result <= n) {
    result = factorial(++i);
  }
  return i - 1;
}
