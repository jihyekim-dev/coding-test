function solution(box, n) {
  // 상자에 들어갈 수 있는 주사위 최대 개수 return
  // 주사위가 차지할 수 있는 최대 부피 게산
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}
