function solution(n) {
  // 자연수 n을 뒤집어 배열 형태로 return
  return [...(n + '')].map((v) => +v).reverse();
}
