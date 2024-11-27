function solution(num, k) {
  // num에 k가 포함되어 있다면, k가 위치한 자리수를
  // 없다면, -1을 return
  const index = (num + '').indexOf(k);
  return index === -1 ? -1 : index + 1;
}
