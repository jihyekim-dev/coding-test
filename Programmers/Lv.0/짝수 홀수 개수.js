function solution(num_list) {
  // num_list 내의 짝수 / 홀수 개수 담은 배열 return
  return num_list.reduce(
    ([even, odd], v) => {
      if (!(v % 2)) even++;
      else odd++;
      return [even, odd];
    },
    [0, 0]
  );
}
