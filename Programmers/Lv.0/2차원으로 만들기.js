function solution(num_list, n) {
  // num_list의 원소를 n개씩 묶어서 (arr) 2차원 배열을 만들어 return
  const result = [];
  let idx = 0;
  for (let i = 0; i < num_list.length / n; i++) {
    for (let j = 0; j < n; j++) {
      result[i] = result[i]
        ? [...result[i], num_list[idx + j]]
        : [num_list[idx + j]];
    }
    idx += n;
  }
  return result;
}
