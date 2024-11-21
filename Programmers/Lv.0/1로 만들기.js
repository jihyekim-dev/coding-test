function solution(num_list) {
  // n = 짝수이면 n / 2, 홀수라면 (n - 1) / 2
  // 위의 과정을 반복하면 1이 나옴
  // num_list의 모든 원소를 1로 만들기 위해 필요한 나누기 연산 횟수 return
  return num_list.reduce((result, v) => {
    let count = 0;
    let num = v;
    while (num > 1) {
      num = !(num % 2) ? num / 2 : (num - 1) / 2;
      count++;
    }
    return result + count;
  }, 0);
}
