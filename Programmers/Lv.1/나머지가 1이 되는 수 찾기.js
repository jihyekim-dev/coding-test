function solution(n) {
  // 자연수 n을 나눴을 때 나머지가 1이 되도록 하는 가장 작은 자연수 x return
  let num = 0;
  while (n % num++ !== 1) {}
  return num - 1;
}
