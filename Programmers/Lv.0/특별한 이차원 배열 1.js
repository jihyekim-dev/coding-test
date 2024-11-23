function solution(n) {
  // n * n 크기의 이차원 배열 return
  // return 될 arr의 각 원소 값: arr[i][j] 일 때, i = j 면 1 아니면 0
  return Array(n)
    .fill()
    .map((_, i) => {
      const result = [];
      let j = 0;
      while (j < n) {
        if (i === j) result[j++] = 1;
        else if (i !== j) result[j++] = 0;
      }
      return result;
    });
}
