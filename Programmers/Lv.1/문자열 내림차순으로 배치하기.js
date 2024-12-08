function solution(s) {
  // 문자열 s를 내림차순 정렬해 return
  return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}
