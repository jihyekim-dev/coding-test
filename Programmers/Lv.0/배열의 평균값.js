function solution(numbers) {
  // numbers 원소들의 평균값 return
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
