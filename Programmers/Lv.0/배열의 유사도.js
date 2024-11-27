function solution(s1, s2) {
  // s1과 s2에서 모두 존재하는 원소의 개수 return
  // 더 긴쪽을 순회하면서 중복되는 원소 개수 count
  const longArr = s1.length >= s2.length ? s1 : s2;
  const shortArr = s1.length < s2.length ? s1 : s2;
  return longArr.reduce((result, v) => {
    shortArr.includes(v) && result++;
    return result;
  }, 0);
}
