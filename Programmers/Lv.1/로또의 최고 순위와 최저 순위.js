function solution(lottos, win_nums) {
  // 로또 최저순위 / 최고순위 구해서 배열로 return
  // lottos 배열의 원소로 0이 들어온다면, 알아볼 수 없는 숫자로 간주
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let count = 0;
  let unknown = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) count++;
    if (!lottos[i]) unknown++;
  }

  return [rank[count + unknown], rank[count]];
}
