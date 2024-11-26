function solution(n, numlist) {
  // numlist에서 n의 배수가 아닌 수를 제거한 배열 return
  return numlist.filter((v) => !(v % n));
}
