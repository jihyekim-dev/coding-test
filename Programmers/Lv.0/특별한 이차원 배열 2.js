function solution(arr) {
  // arr는 n * n 크기의 이차원 배열
  // 모든 원소가 arr[i][j] = arr[j][i]를 만족하면 1, 아니면 0을 return
  // arr를 순회하면서 조건에 맞지 않는 원소 찾기
  return arr.reduce((result, v, i) => {
    let j = v.length - 1;
    while (j > -1) {
      if (arr[i][j] !== arr[j][i]) {
        result = 0;
        break;
      }
      j--;
    }
    return result;
  }, 1);
}
