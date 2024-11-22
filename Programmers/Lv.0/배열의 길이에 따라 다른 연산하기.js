function solution(arr, n) {
  // arr의 길이가 홀수면 arr의 모든 짝수 인덱스에 n을 더한 배열을
  // arr의 길이가 짝수면 arr의 모든 홀수 인덱스에 n을 더한 배열을 return
  const isOdd = arr.length % 2 ? true : false;
  return arr.map((v, i) => {
    if (isOdd) return !(i % 2) ? v + n : v;
    if (!isOdd) return !!(i % 2) ? v + n : v;
  });
}
