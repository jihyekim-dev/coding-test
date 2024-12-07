function solution(n) {
  // 정수 n의 각 자릿수를 내림차순으로 정렬한 새로운 정수 return
  return +[...(n + '')].sort((a, b) => b - a).join('');
}
