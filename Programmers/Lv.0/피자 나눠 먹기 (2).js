function solution(n) {
  // 피자 = 6조각. n명이 주문한 피자를 남김없이, 모두 같은 수의 피자를
  // 먹어야 한다면 최소 몇 판 시켜야 하는지 return
  // 6의 배수를 순회 -> i % n === 0 만족하는 i 찾기
  let i = 6;
  while (!!(i % n)) {
    i += 6;
  }
  return i / 6;
}
