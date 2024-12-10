function solution(t, p) {
  // 숫자 문자열 t에서 p 숫자 문자열의 개수만큼 자른 것 = 부분 문자열
  // 부분 문자열 <= p 인 횟수 return
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const part = t.slice(i, i + p.length);
    if (+part <= +p) count++;
  }
  return count;
}
