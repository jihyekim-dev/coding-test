function solution(n) {
  // 자연수 n의 각 자릿수 합을 구해서 return
  return [...(n + '')].reduce((acc, cur) => acc + +cur, 0);
}
