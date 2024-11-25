function solution(array) {
  // 정수 배열 array 순회, 각 원소에 7이 포함된 횟수를 count해서 return
  return array.reduce((result, v, i) => {
    String(v)
      .split('')
      .forEach((v) => {
        if (v.match(/7/g)) result++;
      });
    return result;
  }, 0);
}
