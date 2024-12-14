function solution(k, m, score) {
  // 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익 return
  // 이익이 발생하지 않는다면, 0 return / 남은 사과는 버림
  // 사과 한 상자 가격: 가장 낮은 점수 * 사과 개수 (m)
  let result = 0;
  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    result += score[i] * m;
  }
  return result;
}
