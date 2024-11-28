function solution(array, n) {
  // array는 정수 배열. 원소 중 정수 n과 가장 가까운 수 return
  // 가까운 수가 여러 개일 경우, 더 작은 수 return
  // array를 순환하며 diff 게산. result 배열에 diff와 value를 기록
  // 만약 diff가 일치할 경우, value 비교해서 더 작은 값으로 교체
  return array.reduce((result, v, i) => {
    const diff = Math.abs(v - n);
    if (i === 0 || diff < result[0] || (diff == result[0] && v < result[1]))
      result = [diff, v];
    return result;
  }, [])[1];
}
