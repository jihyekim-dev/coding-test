function solution(board) {
  // board는 n*n 정수 배열. 지뢰 = 1, 지뢰X = 0
  // 안전지역 칸 개수 return
  // borad 순회하면서 원소 기준으로 상하좌우/대각선 탐색
  // 1이 걸리면 count X, 1이 없으면 count++;
  const dx = [0, 0, -1, 1, -1, 1, -1, 1]; // 상/하/좌/우, 상좌/상우/하좌/하우
  const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let isUnSafe = false;
      if (board[i][j] === 1) isUnSafe = true;
      else {
        for (let k = 0; k < dx.length; k++) {
          const x = j + dx[k];
          const y = i + dy[k];
          if (x >= 0 && y >= 0 && x < board.length && y < board[i].length) {
            if (board[y][x] === 1) isUnSafe = true;
          }
        }
      }
      if (!isUnSafe) count++;
    }
  }
  return count;
}
