function solution(k, score) {
  // k는 명예의 전당 정원 수, score는 출연한 가수들의 점수 배열
  // 매일 발표된 명예의 전당 최하위 점수 배열 return
  const top = [];
  return score.map((v, i) => {
    const min = Math.min(...top);
    if (i < k) top.push(v);
    else if (v > min) {
      top.splice(top.indexOf(min), 1);
      top.push(v);
    }

    return Math.min(...top);
  });
}
