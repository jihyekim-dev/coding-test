function solution(num_list, n) {
  // num_list의 idx가 n의 배수이면 filter
  return num_list.filter((_, i) => i % n === 0);
}
