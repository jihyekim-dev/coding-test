function solution(money) {
  // money는 금액. 최대로 마실 수 있는 아아(5,500) 잔 수와 남는 돈 return
  const coffeCount = parseInt(money / 5500);
  return [coffeCount, money - coffeCount * 5500];
}
