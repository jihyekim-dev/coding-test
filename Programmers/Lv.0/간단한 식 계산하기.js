function solution(binomial) {
  // binomial = a, op (+ / - / *), b로 구성된 문자열. 구분자는 공백 하나
  // 주어진 식 계산한 정수 return
  const [a, op, b] = binomial.split(' ');
  switch (op) {
    case '+':
      return +a + +b;
    case '-':
      return +a - +b;
    case '*':
      return +a * +b;
  }
}
