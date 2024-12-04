function solution(price) {
  // price는 구매한 옷 가격. 지불해야 할 금액 return
  // 10만 이상: 5% / 30만 이상: 10% / 50만 이상: 20% 할인
  function solution(price) {
    const discount =
      price >= 500000
        ? Math.round(price * 0.2)
        : price >= 300000
        ? Math.round(price * 0.1)
        : price >= 100000
        ? Math.round(price * 0.05)
        : 0;
    return price - discount;
  }
}
