function solution(board, moves) {
  // board: 화면 상태 (0: 빈 곳, 1~100: 인형)
  // moves : 크레인 작동시킨 위치 (1~화면 격자 가로 최대크기)
  // 인형이 집어지지 않는 경우는 X. 단, 빈 곳에서 집으면 아무일도 안 일어남
  // 터트러져 사라진 인형 개수 return
  const basket = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1;
    const row = board.findIndex((v) => !!v[col]);
    if (row === -1) continue;

    basket.push(board[row][col]);
    board[row][col] = 0;
    if (basket.at(-1) === basket.at(-2)) {
      count += 2;
      basket.splice(-2);
    }
  }

  return count;
}
