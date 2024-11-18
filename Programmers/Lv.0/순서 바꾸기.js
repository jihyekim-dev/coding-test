function solution(num_list, n) {
  // num_list를 n - 1 idx 기준으로 자르기
  // -> arr 2개 a / b -> arr b + a return
  // num_list 앞의 것이 남게 splice -> concat
  return num_list.splice(n).concat(num_list);
}
