function solution(keyinput, board) {
  // 이동 끝난 뒤 캐릭터 좌표를 [x, y] 형식으로 return
  // keyinput에 따라 캐릭터 이동. board 범위 초과시 이동 무시
  const dxy = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]; // 상하좌우
  const log = keyinput.map((v) => {
    switch (v) {
      case 'up':
        v = dxy[0];
        break;
      case 'down':
        v = dxy[1];
        break;
      case 'left':
        v = dxy[2];
        break;
      case 'right':
        v = dxy[3];
        break;
    }
    return v;
  });
  return log.reduce(
    ([prevX, prevY], [curX, curY]) => {
      const [xRange, yRange] = [(board[0] - 1) / 2, (board[1] - 1) / 2];
      const [newX, newY] = [prevX + curX, prevY + curY];
      if (newX >= -xRange && newX <= xRange) prevX = newX;
      if (newY >= -yRange && newY <= yRange) prevY = newY;
      return [prevX, prevY];
    },
    [0, 0]
  );
}
