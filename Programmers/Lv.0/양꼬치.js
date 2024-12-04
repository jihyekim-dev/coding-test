function solution(n, k) {
  // 양꼬치(n): 12,000 / 음료수(k): 2,000. 총 지불해야 하는 가격 return
  // n / 10만큼 k 감소 시키기
  return n * 12000 + (k - parseInt(n / 10)) * 2000;
}
