function solution(price, money, count) {
  // 이용료가 price원인 놀이기구를 count번 타면
  // money에서 얼마가 모자라는지 return, 모자라지 않으면 0 return
  // 놀이기구 1회 이용료: price x N (놀이기구 이용횟수)
  const extra =
    Array(count)
      .fill(1)
      .reduce((acc, v, i) => acc + (v + i) * price, 0) - money;
  return extra > 0 ? Math.abs(extra) : 0;
}
