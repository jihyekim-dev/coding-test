function solution(chicken) {
  // 쿠폰 열장 = 치킨 한 마리. 서비스 치킨에도 쿠폰 발급 됨
  // chicken = 시켜 먹은 치킨 수. 받을 수 있는 최대 서비스 치킨 수 return
  // coupon이 10장 미만이 될때까지 순회
  let coupon = chicken;
  let service = 0;
  while (coupon > 9) {
    const newChicken = parseInt(coupon / 10);
    coupon %= 10;
    service += newChicken;
    coupon += newChicken;
  }
  return service;
}
