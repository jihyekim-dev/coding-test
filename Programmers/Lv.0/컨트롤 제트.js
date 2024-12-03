function solution(s) {
  // 연산한 값 return
  // s를 공백으로 split -> 순회하면서 순차적으로 연산
  return s.split(' ').reduce((result, v, i, origin) => {
    if (v !== 'Z') result += +v;
    if (v === 'Z') result -= +origin[i - 1];
    return result;
  }, 0);
}
