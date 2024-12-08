function solution(arr1, arr2) {
  // 두 행렬 arr1과 arr2의 덧셈 결과 return
  // 같은 행, 같은 열의 값을 서로 더한 결과 누적
  return arr1.map((v, i) => v.map((w, j) => w + arr2[i][j]));
}
