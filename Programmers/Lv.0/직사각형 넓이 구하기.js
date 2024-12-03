function solution(dots) {
  // 직사각형 넓이 return
  // 가로: y좌표 같은 점 -> x좌표 차이
  // 세로: x좌표 같음 -> y좌표 차이
  const sorted = dots.sort(([x1, y1], [x2, y2]) => x1 - x2 || y1 - y2);
  return (
    Math.abs(sorted[0][1] - sorted[1][1]) *
    Math.abs(sorted[2][0] - sorted[0][0])
  );
}
