function solution(dot) {
  // dot이 어느 사분면에 속하는지 return
  // 1: 양양, 2: 음양, 3: 음음, 4: 양음
  return dot[0] > 0 && dot[1] > 0
    ? 1
    : dot[0] < 0 && dot[1] > 0
    ? 2
    : dot[0] < 0 && dot[1] < 0
    ? 3
    : 4;
}
