function solution(my_string, n) {
  // my_string에 있는 각 원소를 n만큼 반복한 문자열 return
  return [...my_string].map((v) => v.repeat(n)).join('');
}
