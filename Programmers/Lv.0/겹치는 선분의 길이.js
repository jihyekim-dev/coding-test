function solution(lines) {
  // 두 개 이상의 선분이 겹치는 부분의 길이를 return
  // 가장 작은 시작 지점, 가장 큰 끝 지점 구해서 모든 선분이 지나가는 범위 구하기
  // 해당 범위로 배열 만들어서 순회
  // lines 순회하면서 각 line이 지나간 범위 체크 -> 겹치는 구간의 길이 return
  const sorted = lines.flat().sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted.at(-1);
  const arr = Array(max - min + 1).fill(0);

  lines.forEach(([s, e]) => {
    for (let i = s; i < e; i++) {
      arr[i - min]++;
    }
  });
  return arr.filter((v) => v > 1).length;
}
