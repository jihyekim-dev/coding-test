const scoreMap = [0, 3, 2, 1, 0, 1, 2, 3];

function solution(survey, choices) {
  // 성격 유형 검사 결과를 지표 번호 순서대로 return
  // survey: 각 질문에 해당하는 판단 지표 담은 1차원 문자 arr
  // choices: 각 질문마다 선택된 선택지 담은 1차원 정수 arr

  let result = '';
  const idxMap = new Map();
  const kind = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  for (let i = 0; i < kind.length; i++) {
    idxMap.set(kind[i], 0);
  }

  for (let i = 0; i < survey.length; i++) {
    const [idx1, idx2] = survey[i];
    const choice = choices[i];
    const score = scoreMap[choice];
    let winIdx = '';

    if ([1, 2, 3].includes(choice)) winIdx = idx1;
    else if ([5, 6, 7].includes(choice)) winIdx = idx2;
    else continue;

    idxMap.set(winIdx, idxMap.get(winIdx) + score);
  }

  const pair = [0, ['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
  for (let i = 1; i < pair.length; i++) {
    const [a, b] = pair[i];
    const aScore = idxMap.get(a);
    const bScore = idxMap.get(b);

    if (aScore > bScore) result += a;
    else if (aScore === bScore) result += [a, b].sort()[0];
    else result += b;
  }

  return result;
}
