function solution(slice, n) {
  // n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇판의 피자 필요한지 return
  return Math.ceil(n / slice);
}
