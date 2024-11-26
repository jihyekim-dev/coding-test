function solution(quiz) {
  // quiz: 'X [연산자] Y = Z' 형태의 문자열이 들어간 배열
  // 수식이 옳다면 'O', 틀리다면 'X'를 순서대로 담은 배열 return
  // quiz 배열 순회하며 문자열을 연산 가능하게 변경 후 연산, 해당 결과를 mapping
  // rest를 ' ' 기준으로 split
  // 연산자(+, -, *, /) 이전, 이후 = num
  // 연산자(+, -, *, /) = operator
  // '=' 이후 = total
  return quiz.map((v) => {
    const [n1, operator, n2, _, total] = v.split(' ');
    const operators = {
      '+': (n1, n2) => n1 + n2,
      '-': (n1, n2) => n1 - n2,
    };
    const result = operators[operator](+n1, +n2);
    return result === +total ? 'O' : 'X';
  });
}
