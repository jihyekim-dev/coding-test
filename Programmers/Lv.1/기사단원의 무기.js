function solution(number, limit, power) {
  // number: 기사의 수 (e.g. number: 10 -> 1~10 -> 각 기사의 기사 번호)
  // limit: 공격력 제한 수치
  // power: 공격력 제한 수치 초과한 경우 사용할 무기의 공격력
  // 공격력 1 = 철 1kg. 무기를 만들기 위해 필요한 철 무게 합 return
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= parseInt(Math.sqrt(i)); j++) {
      if (!(i % j)) {
        count++;
        i / j !== j && count++;
      }
    }
    result += count > limit ? power : count;
  }

  return result;
}
