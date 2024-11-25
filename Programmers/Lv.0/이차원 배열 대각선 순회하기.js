function solution(board, k) {
  // i + j <= k를 만족하는 모든 i, j에 대해 board[i][j]의 합 return
  // board 순회, i + j <= k 이면 result에 board[i][j] 누적하기
  return board.reduce((result, v, i) => {
    for (let j = 0; j < v.length; j++) {
      if (i + j <= k) result += board[i][j];
    }
    return result;
  }, 0);
}
