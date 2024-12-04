function solution(age) {
  // age를 소문자식 나이로 변형해서 return
  // a = 97. age의 원소 + 98하여 소문자로 mapping
  return String(age)
    .split('')
    .map((v) => String.fromCharCode(+v + 97))
    .join('');
}
