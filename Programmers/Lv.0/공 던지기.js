function solution(numbers, k) {
  // 공은 1번 부터 던짐. 한 명 건너뛰고 그 다음 번호에게만 던질 수 있음
  // 처음과 끝은 이어져있음. k번째로 공 던지는 사람 번호 return
  let idx = 0;
  for (let i = 0; i < k; i++) {
    idx += 2;
    if (i === 0) idx = 0;
    if (idx > numbers.length) idx -= numbers.length;
  }
  return numbers[idx];
}
