function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (!(num % i)) return false;
  }
  return true;
}

function solution(nums) {
  // nums의 원소 중 3개를 더했을 때, 소수가 되는 경우의 수 return
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum % 2 && isPrime(sum)) count++;
      }
    }
  }
  return count;
}
