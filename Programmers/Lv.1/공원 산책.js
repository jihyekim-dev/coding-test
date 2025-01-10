function solution(park, routes) {
  // park: 공원 상태 (S: 시작점, O: 이동 가능, X: 장애물)
  // routes: 수행할 명령어 ("op n" 형태)
  const opMap = { 'N': [-1, 0], 'S': [1, 0], 'W': [0, -1], 'E': [0, 1] };
  let coord = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (/S/.test(park[i])) coord = [i, park[i].search(/S/)];
  }

  for (let i = 0; i < routes.length; i++) {
    let [op, n] = routes[i].split(' ');
    const [xOp, yOp] = opMap[op];
    let [x, y] = coord;

    for (let j = 0; j < n; j++) {
      x += xOp;
      y += yOp;
      if (x >= park.length || y >= park[0].length || x < 0 || y < 0) break;
      if (park[x][y] === 'X') break;
      if (j === n - 1) coord = [x, y];
    }
  }

  return coord;
}
