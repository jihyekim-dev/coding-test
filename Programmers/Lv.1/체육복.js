function solution(n, lost, reserve) {
  // 체육수업 들을 수 있는 학생의 최댓값 return
  const l = lost.filter((v) => !reserve.includes(v)).sort();
  const r = reserve.filter((v) => !lost.includes(v));
  let lostCount = 0;
  for (let i = 0; i < l.length; i++) {
    const v = l[i];

    if (r.includes(v - 1)) r.splice(r.indexOf(v - 1), 1);
    else if (r.includes(v + 1)) r.splice(r.indexOf(v + 1), 1);
    else lostCount++;
  }
  return n - lostCount;
}
