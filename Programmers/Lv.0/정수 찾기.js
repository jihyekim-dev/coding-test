function solution(num_list, n) {
  // num_list 안에 n이 있으면 1, 없으면 0 return
  return +num_list.includes(n);
}
