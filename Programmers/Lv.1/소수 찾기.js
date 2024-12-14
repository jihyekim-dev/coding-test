function solution(n) {
  // 1 ~ n 사이의 소수 개수 return
  // 1은 소수가 아님
  // 에라토스테네스의 체 이용
  const nums = Array(n + 1).fill(1);
  let count = n - 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!nums[i]) continue;
    for (let j = i ** 2; j < nums.length; j += i) {
      if (nums[j]) {
        nums[j] = 0;
        count--;
      }
    }
  }

  return count;
}
