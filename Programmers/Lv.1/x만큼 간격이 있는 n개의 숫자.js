function solution(x, n) {
  // 정수 x부터 시작해서 x 만큼 증가하는 숫자 n개 arr return
  // 길이가 n인 array 생성 -> 순회하며 x씩 증가하는 값 mapping
  return Array(n)
    .fill(x)
    .map((v, i) => v + x * i);
}
