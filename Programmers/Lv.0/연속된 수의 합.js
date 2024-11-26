function solution(num, total) {
  // 연속된 수 num 개를 더한 값이 total이 되게 하는 정수 배열 오름차순으로 return
  // sn = total, d = 1인 등차수열의 합
  const initial = total / num - (num - 1) / 2;
  return Array(num)
    .fill(initial)
    .map((v, i) => v + i);
}
