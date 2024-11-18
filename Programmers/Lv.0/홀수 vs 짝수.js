function solution(num_list) {
  // 첫번째 원소 = 1번 원소
  // 홀수 원소 합, 짝수 원소 합 비교 -> 큰 값 return 같으면 그 값 return
  // reduce로 순회하면서 홀, 짝 합 구하기 -> 마지막 idx에서 크기 비교
  return num_list.reduce(
    (result, v, i) => {
      if (i % 2 !== 0) result[0] += v;
      if (i % 2 === 0) result[1] += v;
      return i < num_list.length - 1
        ? result
        : result[0] >= result[1]
        ? result[0]
        : result[1];
    },
    [0, 0]
  );
}
