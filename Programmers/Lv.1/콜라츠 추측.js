function solution(num) {
  // 정수 num이 몇 번을 반복해야 1이 되는지 return
  // 주어진 수가 1이라면, 0 return
  // 작업을 500번 반복할 때까지 1이 안 된다면, -1 return
  let count = 0;
  let i = 0;
  while (i++ < 500) {
    if (num === 1) break;
    if (!(num % 2)) {
      num /= 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }
  return i > 499 ? -1 : count;
}
