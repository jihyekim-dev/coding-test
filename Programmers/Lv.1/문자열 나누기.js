function solution(s) {
  // x: 첫 원소, s를 순회하며 x와 !x 개수 세서 같아지는 지점에서 분리
  // 더이상 순회할 원소가 없다면, 지금까지 읽은 문자열 분리 후 순회 종료
  // 분해한 문자열의 개수 return
  let x = [s[0], 0];
  let y = 0;
  return [...s].reduce((result, v, i) => {
    if (v === x[0]) x[1]++;
    else y++;

    if (x[1] === y) {
      x[0] = s[i + 1];
      x[1] = 0;
      y = 0;
      result++;
    } else if (i === s.length - 1) result++;

    return result;
  }, 0);
}
