function solution(n_str) {
  // n_str은 정수로만 이루어진 문자열
  // 가장 왼쪽에 등장하는 0이 있다면, 해당 0부터 ~ 마지막 연속한 0까지 제거
  // 가장 왼쪽에 등장하는 0이 없다면, 그대로 return
  let index = -1;
  while (n_str[index + 1] === '0') index++;
  return index > -1 ? n_str.slice(index + 1) : n_str;
}
