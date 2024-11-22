function solution(num_list) {
  // num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트 return
  return num_list.sort((a, b) => a - b).slice(0, 5);
}
