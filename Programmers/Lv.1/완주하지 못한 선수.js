function solution(participant, completion) {
  // participant와 completion 배열을 비교, 완주 못한 참가자 이름 return
  const obj = {};
  for (const p of participant) {
    if (obj[p]) obj[p]++;
    else obj[p] = 1;
  }

  for (const c of completion) {
    if (obj[c]) obj[c]--;
  }

  for (const o in obj) {
    if (obj[o]) return o;
  }
}
