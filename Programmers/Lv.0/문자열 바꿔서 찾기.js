function solution(myString, pat) {
  // myString은 'A'와 'B'로 이루어진 문자열
  // myString의 'A' -> 'B', 'B' -> 'A'로 바꾸기
  // 바꾼 문자열에서 pat이 있다면 1, 아니면 0 return
  const edited = [...myString].reduce((result, v) => {
    if (v.charCodeAt() === 65) return result + 'B';
    if (v.charCodeAt() === 66) return result + 'A';
  }, '');
  return edited.indexOf(pat) > -1 ? 1 : 0;
}
