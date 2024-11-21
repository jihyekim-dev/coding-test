function solution(num_list) {
  // num_list.length >= 11 이면 모든 원소 합
  // num_list.length < 11 이면 모든 원소 곱 return
  return num_list.length >= 11
    ? num_list.reduce((acc, cur) => acc + cur)
    : num_list.reduce((acc, cur) => acc * cur);
}
