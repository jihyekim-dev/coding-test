function solution(absolutes, signs) {
  // absolutes 배열의 각 원소들의 부호가 담긴 배열 signs
  // absolutes 배열의 실제값 기준으로 합을 구해서 return
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}
