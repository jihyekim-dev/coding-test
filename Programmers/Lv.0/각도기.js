function solution(angle) {
  // angle이 속한 분류 return
  // 예각: 1, 직각: 2, 둔각: 3, 평각: 4
  return angle === 180 ? 4 : angle > 90 ? 3 : angle === 90 ? 2 : 1;
}
