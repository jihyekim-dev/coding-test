function solution(my_string) {
  // my_string은 문자열. 대문자 -> 소문자, 소문자 -> 대문자로 변환
  return [...my_string]
    .map((v) => {
      if (v.match(/[A-Z]/)) return v.toLowerCase();
      if (v.match(/[a-z]/)) return v.toUpperCase();
    })
    .join('');
}
