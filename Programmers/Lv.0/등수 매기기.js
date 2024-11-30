function solution(score) {
  // 점수 평균 기준으로 등수 매겨서 return
  // 중복 등수 다음 등수는 중복 등수.length + 1
  const sorted = [...score].map(([e, m]) => (e + m) / 2).sort((a, b) => b - a);
  return score.map(([e, m]) => sorted.indexOf((e + m) / 2) + 1);
}
