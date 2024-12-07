function solution(arr, divisor) {
  // arr의 원소 중 divisor로 나눠지는 값을 오름차순으로 정렬해서 return
  // 만약 하나도 없다면, -1 return
  const result = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);
  return result.length > 0 ? result : [-1];
}
