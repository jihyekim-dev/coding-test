function solution(sides) {
  // 가장 긴 변의 길이 < 다른 두 변 길이의 합
  // 나머지 한 변이 될 수 있는 정수의 개수 return
  const [min, max] = sides.sort((a, b) => a - b);
  return max - (max - min) + (max + min - max - 1);
}

// 위의 공식을 정리하면
function solution(sides) {
  return 2 * Math.min(...sides) - 1;
}
