function solution(rsp) {
  // 가위바위보 모두 이기는 경우를 순서대로 나타낸 문자열 return
  // 가위 2 > 5, 바위 2 < 0, 보 0 < 5
  return rsp
    .split('')
    .map((v) => {
      if (v === '0') return 5;
      if (v === '2') return 0;
      if (v === '5') return 2;
    })
    .join('');
}
