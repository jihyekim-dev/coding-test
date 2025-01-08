function solution(wallpaper) {
  // wallpaper: 컴퓨터 바탕화면 상태 arr
  // 최소한의 이동거리에 해당하는 드래그 시작점 & 끝점 담은 정수 배열 return
  const lux = [];
  const luy = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '.') continue;
      lux.push(j);
      luy.push(i);
    }
  }

  lux.sort((a, b) => a - b);
  luy.sort((a, b) => a - b);

  return [luy[0], lux[0], luy[luy.length - 1] + 1, lux[lux.length - 1] + 1];
}
