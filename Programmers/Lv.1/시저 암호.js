function solution(s, n) {
  // 문자열 s를 n만큼 민 암호문 return
  return [...s].reduce((result, v) => {
    if (v === ' ') return (result += v);

    v = v.charCodeAt();
    let newV = v + n;
    // v가 대문자인데, 대문자 범위 초과한 경우
    if (v >= 65 && v <= 90 && newV % 91 < 25) newV = (newV % 91) + 65;
    // v가 소문자인데, 소문자 범위 초과한 경우
    else if (v >= 97 && v <= 122 && newV % 123 < 25) newV = (newV % 123) + 97;
    return (result += String.fromCharCode(newV));
  }, '');
}
