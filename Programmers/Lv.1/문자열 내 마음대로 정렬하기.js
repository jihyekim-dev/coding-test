function solution(strings, n) {
  // 문자열 배열 strings의 원소를 각 원소의 n번째 글자 기준으로 오름차순 정렬
  // 기준 문자가 같은 경우, 사전순으로 앞선 문자열이 우선
  return strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}
