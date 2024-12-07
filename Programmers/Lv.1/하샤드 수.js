function solution(x) {
  // x가 하샤드 수이면 true, 아니면 false return
  // 하샤드 수: x의 자릿수 합으로 x가 나뉘는 수
  return Number.isInteger(
    x / [...(x + '')].reduce((acc, cur) => acc + +cur, 0)
  );
}
