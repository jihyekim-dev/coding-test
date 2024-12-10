function solution(d, budget) {
  // buget 안에서 각 부서에 금액을 배분. 최대 몇 개의 부서를 지원할 수 있는지 return
  // 요구 예산 적은 부서의 예산 부터 sum에 누적. 누적 성공하면 count 증가.
  let sum = 0;
  let count = 0;
  d.sort((a, b) => a - b);

  let i = 0;
  while (sum <= budget) {
    sum += d[i++];
    if (sum <= budget) count++;
  }
  return count;
}
