function arrMap(arr, x) {
  return Array(x)
    .fill()
    .reduce((result) => {
      return result.map((v) =>
        v >= 50 && !(v % 2) ? v / 2 : v < 50 && !!(v % 2) ? v * 2 + 1 : v
      );
    }, arr);
}

function solution(arr) {
  // arr를 순회, value가 v >= 50 && 짝수이면 v / 2로,
  // v < 50 && 홀수이면 v * 2 + 1로 변경
  // 이 작업을 x번 반복한 결과물 = arr(x);
  // arr(x) = arr(x + 1)인 가장 작은 x return
  let result = 0;
  while (true) {
    const arrX = arrMap(arr, result);
    const arrXPlusOne = arrMap(arr, result + 1);
    if (arrX.every((v, i) => v === arrXPlusOne[i])) break;
    result++;
  }
  return result;
}
