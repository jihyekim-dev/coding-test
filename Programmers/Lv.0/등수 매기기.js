function solution(score) {
  // 영어 점수와 수학 점수의 평균을 기준으로 등수 내서 return
  const average = [];
  for (let [e, n] of score) {
    average.push((e + n) / 2);
  }

  const rankArr = [...average].sort((a, b) => b - a);
  return average.reduce((result, v, i) => {
    const rank = rankArr.indexOf(v);
    if (!result.includes(rank)) result.push(rank + 1);
    else if (result.includes(rank) && rankArr[rank] === v)
      result.push(rank + 1);
    else if (result.includes(rank) && rankArr[rank] !== v)
      result.push(rank + 2);
    return result;
  }, []);
}
