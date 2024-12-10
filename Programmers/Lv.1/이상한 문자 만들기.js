function solution(s) {
  // 영단어가 공백 문자로 구분된 문자열 s
  // 각 단어의 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 바꿔서 return
  return s
    .split(' ')
    .map((word) => {
      return [...word]
        .map((v, i) => (!(i % 2) ? v.toUpperCase() : v.toLowerCase()))
        .join('');
    })
    .join(' ');
}
