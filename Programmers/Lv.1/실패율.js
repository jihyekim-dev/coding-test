function solution(N, stages) {
  // 전체 스테이지에 대한 실패율 계산하여 실패율 기준으로 내림차순 정렬
  // fail = remain / total
  const result = [];
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    const remain = stages.filter((v) => v === i).length;
    result.push([i, remain / total]);
    total -= remain;
  }

  return result.sort(([_, f1], [__, f2]) => f2 - f1).map((v) => v[0]);
}
