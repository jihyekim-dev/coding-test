function solution(arr) {
  // arr의 원소인 n을 answer arr에 n번 추가한 배열 return
  const power = arr
    .map((_, i) => Math.abs(2 * i - arr.length))
    .sort((a, b) => a - b);
  return [...arr, ...Array(power[0]).fill(0)];
}
