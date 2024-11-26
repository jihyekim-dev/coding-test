function solution(my_str, n) {
  // 문자열 my_str을 n개씩 잘라서 저장한 배열을 return
  // 마지막에 문자열이 남는 경우 n 개에 미달되더라도 그대로 배열에 저장
  const result = [];
  while (my_str.length) {
    const toSliced = my_str.slice(0, n);
    result.push(toSliced);
    my_str = my_str.replace(toSliced, '');
  }
  return result;
}
