function solution(answers) {
  // 가장 많이 맞춘 사람 배열에 담아 return
  // 맞춘 문제 수가 같을 경우, 오름차순으로 담아서 return
  // 1번: 1, 2, 3, 4, 5 .. / 2번: 2, 1, 2, 3, 2, 4, 2, 5 ..
  // 3번: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ..
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const correct = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) correct[0]++;
    if (two[i % two.length] === answers[i]) correct[1]++;
    if (three[i % three.length] === answers[i]) correct[2]++;
  }

  const max = Math.max(...correct);
  return correct.reduce((result, v, i) => {
    if (v === max) result.push(i + 1);
    return result;
  }, []);
}
