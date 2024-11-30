function solution(numlist, n) {
  // numlist를 n과 가까운 순서대로 정렬. diff가 같다면 큰 수를 더 앞에 정렬
  // n으로부터의 diff 계산해서 mapping. diff 기준 -> v 기준으로 정렬
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
