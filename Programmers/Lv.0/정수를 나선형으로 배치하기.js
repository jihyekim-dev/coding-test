function solution(n) {
  // n * n 배열에 1 ~ n ** 2까지 정수를 [0][0]부터 나선형으로 배치
  // x, y 를 두고 1 ~ n ** 2 칸을 좌표처럼 이동
  // x, y가 범위를 벗어나거나 ((x|y) < 0 || (x|y) >= n)
  // 특정 좌표에 이미 숫자가 있으면 (result[x][y] > 0)
  // 방향을 전환하고 다시 진행 (x -> 상: 0, 하: 0, 좌: +1, 우: -1)
  //                          y -> 상: +1, 하: -1, 좌: 0, 우: 0)
  const result = Array.from(Array(n), () => Array(n).fill(0));
  let x = 0;
  let y = 0;
  let direction = 0; // 좌: 0, 하: 1, 우: 2, 상: 3
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let num = 1;

  while (num <= n ** 2) {
    if (x >= 0 && y >= 0 && x < n && y < n && result[y][x] === 0) {
      result[y][x] = num++;
    } else {
      x -= dx[direction];
      y -= dy[direction];
      direction = ++direction % 4;
    }
    x += dx[direction];
    y += dy[direction];
  }
  return result;
}
