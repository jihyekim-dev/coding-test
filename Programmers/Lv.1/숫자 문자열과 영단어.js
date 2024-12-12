const match = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solution(s) {
  // 숫자와 영어 소문자단어가 섞인 문자열 s를 숫자로 return
  let result = s;
  for (let i = 0; i < match.length; i++) {
    const regExp = new RegExp(match[i], 'g');
    result = result.replace(regExp, i);
  }
  return parseInt(result);
}
