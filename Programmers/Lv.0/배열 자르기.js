function solution(numbers, num1, num2) {
  // numbers 배열을 num1 idx부터 num2 idx까지 자른 배열 return
  return numbers.slice(num1, num2 + 1);
}
