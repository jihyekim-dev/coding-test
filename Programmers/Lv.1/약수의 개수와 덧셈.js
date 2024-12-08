function solution(left, right) {
  // 정수 left ~ right까지 모든 수 중에서 약수 개수가 짝수인 수는 더하고,
  // 약수의 개수가 홀수인 수들은 뺀 값을 return
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (!(i % j)) count++;
    }
    result += !(count % 2) ? i : -i;
  }
  return result;
}
