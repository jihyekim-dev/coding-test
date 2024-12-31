function solution(ingredient) {
  // 포장하는 햄버거 개수 return
  // ingredient의 원소 1: 빵, 2: 야채, 3: 고기
  // 햄버거 재료 쌓기 순서: 빵 – 야채 – 고기 - 빵 (1231)
  const arr = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    if (arr.slice(-4).join('') === '1231') {
      count++;
      arr.splice(-4, 4);
    }
  }
  return count;
}
