function solution(arr) {
  // 자연수 배열 arr에서 연속해서 같은 값을 가진 원소 제거 후 return
  const result = [];
  arr.forEach((v) => result[result.length - 1] !== v && result.push(v));
  return result;
}
