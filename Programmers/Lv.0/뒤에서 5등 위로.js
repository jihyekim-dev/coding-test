function solution(num_list) {
  // num_list에서 가장 작은 5개 수 제외한 수를 오름차순으로 담아 return
  return num_list.sort((a, b) => a - b).slice(5);
}
