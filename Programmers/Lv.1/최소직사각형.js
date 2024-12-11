function solution(sizes) {
  // 모든 명함을 수납할 수 있는 가장 작은 지갑 크기 return
  // 가로, 세로는 바뀔 수 있음. 원소 내에서 큰 수 / 작은 수를 가른 뒤,
  // 작은 수는 separated[0]에, 큰 수는 separated[1]에 넣기
  const separated = [[], []];
  for (let i = 0; i < sizes.length; i++) {
    const [h, v] = sizes[i];
    if (h > v) {
      separated[0].push(v);
      separated[1].push(h);
    } else {
      separated[0].push(h);
      separated[1].push(v);
    }
  }
  return Math.max(...separated[0]) * Math.max(...separated[1]);
}
