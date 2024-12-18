function solution(dartResult) {
  // 다트 점수 계산
  // S: ** 1, D: ** 2, T: **3
  // *: 해당 점수 + 이전 점수 2배, #: 해당 점수 마이너스 -> *, # 중첩 가능
  const result = [];
  const splited = dartResult
    .replace(/([0-9]+)[SDT]([\*#]?)/g, (a) => a + ' ')
    .split(' ');

  for (let i = 0; i < splited.length - 1; i++) {
    let score = +splited[i].match(/[0-9]+/)[0];
    const bonus = splited[i].match(/[SDT]/)[0];
    const option = splited[i].match(/[\*#]/)
      ? splited[i].match(/[\*#]/)[0]
      : '';

    if (bonus === 'D') score **= 2;
    if (bonus === 'T') score **= 3;
    if (option === '*') {
      score *= 2;
      if (result[i - 1]) result[i - 1] *= 2;
    }
    if (option === '#') score = -score;
    result.push(score);
  }

  return result.reduce((acc, cur) => acc + cur);
}
