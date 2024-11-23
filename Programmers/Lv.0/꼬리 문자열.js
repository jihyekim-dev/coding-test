function solution(str_list, ex) {
  // str_list에서 ex가 포함된 원소 제거
  // 남은 원소로 문자열 만들어서 return
  return str_list.filter((v) => !v.includes(ex)).join('');
}
