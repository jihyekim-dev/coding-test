function solution(dots) {
  // 네 개의 점을 두 개씩 이었을 때
  // 두 직선이 평행이 되는 경우가 있다면 1, 없다면 0 return
  // 평행 = 기울기가 같다. / 기울기 = y 좌표 변화량 % x 좌표 변화량
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;
  if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;
  if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;
  return 0;
}
