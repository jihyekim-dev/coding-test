function solution(arr) {
  // arr의 행의 수 > 열의 수: 각 행 끝에 모자란 만큼 0 추가
  // arr의 열의 수 > 행의 수: 0이 열의 갯수만큼 담긴 배열을 모자란 만큼 추가
  return arr.reduce((result, v, i) => {
    const row = arr.length;
    const column = v.length;
    const diff = row - column;

    if (diff > 0) result[i] = [...v, ...Array(diff).fill(0)];
    if (diff < 0 && i === arr.length - 1) {
      for (let j = 0; j < Math.abs(diff); j++) {
        result.push(Array(column).fill(0));
      }
    }
    return result;
  }, arr);
}
