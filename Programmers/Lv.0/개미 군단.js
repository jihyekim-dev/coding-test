function solution(hp) {
  // hp는 사냥감의 체력(자연수). 최소한으로 구성된 병력 수 return
  // 장군: 5, 병정: 3, 일: 1
  // hp를 i로 나눈뒤 정수인지 검사
  // 정수라면, count에 몫 누적 & for문 탈출
  // 아니라면, hp에 i와의 나머지 연산 결과 할당 & count에 몫 누적
  let count = 0;
  for (let i = 5; i > 0; i -= 2) {
    const qoutient = hp / i;
    count += parseInt(qoutient);
    if (!Number.isInteger(qoutient)) hp %= i;
    if (Number.isInteger(qoutient)) break;
  }
  return count;
}
