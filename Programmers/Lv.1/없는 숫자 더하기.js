function solution(numbers) {
  // 정수 배열 numbers에 없는 0 ~ 9 까지의 정수의 합 return
  // 0 ~ 9가 담긴 배열 만들고 numbers에 없는 애들만 남기고 filter
  return Array(10)
    .fill(0)
    .reduce((acc, v, i) => acc + (numbers.includes(v + i) ? 0 : v + i), 0);
}
