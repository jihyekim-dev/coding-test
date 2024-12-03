function solution(n) {
  // n 이하의 합성수 개수 return
  const result = [];
  for (let i = 4; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if ((i !== j) & (j !== 1) && i % j === 0) result.push(i);
    }
  }
  return Array.from(new Set(result)).length;
}
