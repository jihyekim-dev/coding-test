function solution(cipher, code) {
  // cipher는 문자열. code의 배수 번째 글자만 뽑아서 문자열로 return
  return [...cipher].filter((v, i) => !((i + 1) % code)).join('');
}
