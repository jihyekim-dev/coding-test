function solution(bin1, bin2) {
  // 두 이진수 bin1과 bin2의 합을 문자열로 return
  const result = parseInt(bin1, 2) + parseInt(bin2, 2);
  return Number(result).toString(2);
}
