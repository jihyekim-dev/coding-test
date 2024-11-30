function solution(n) {
  // 정수 n을 3의 배수 & 숫자 3을 사용하지 않도록 변경하여 return
  // 이미 사용한 숫자를 사용하면 안 되므로 기존 숫자를 모두 계산
  const numbers = [];
  for (let i = 0; i < n; i++) {
    let v = i;
    while (!(v % 3) || String(v).match(/3/g) || numbers.includes(v)) {
      v++;
    }
    numbers.push(v);
  }
  return numbers.at(-1);
}
