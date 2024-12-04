function solution(array) {
  // array의 원소 중 가장 자주 나오는 값 return
  // 최빈값이 여러 개면 -1을 return
  const reduced = array.reduce((result, v) => {
    result[v] = result[v] ? [v, ++result[v][1]] : [v, 1];
    return result;
  }, []);
  reduced.sort(([_, c1], [__, c2]) => c2 - c1);
  const [mode, count] = reduced[0];
  return reduced.filter(([_, c]) => c === count).length > 1 ? -1 : mode;
}
