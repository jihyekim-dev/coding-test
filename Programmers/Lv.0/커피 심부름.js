function solution(order) {
  // 차/뜨 구분 없이 아메: 4,500 / 라떼: 5,000
  // 아무거나 = 아메
  // 카페에서 결제하게 될 금액 return
  return order.reduce((result, v) => {
    let price;
    if (
      [
        'iceamericano',
        'americanoice',
        'hotamericano',
        'americanohot',
        'americano',
        'anything',
      ].includes(v)
    )
      price = 4500;
    if (
      [
        'icecafelatte',
        'cafelatteice',
        'hotcafelatte',
        'cafelattehot',
        'cafelatte',
      ].includes(v)
    )
      price = 5000;
    return result + price;
  }, 0);
}
