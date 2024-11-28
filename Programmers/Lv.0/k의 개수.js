function solution(i, j, k) {
  // i ~ j까지의 정수에서 k가 몇 번 등장하는지 return
  // i ~ j까지 순회, 각 숫자를 분해해서 k가 몇번 들어갔는지 count
  let count = 0;
  for (let n = i; n <= j; n++) {
    const total = String(n).length;
    const edited = String(n).replace(new RegExp(`${k}`, 'g'), '').length;
    count += total - edited > 0 ? total - edited : 0;
  }
  return count;
}
