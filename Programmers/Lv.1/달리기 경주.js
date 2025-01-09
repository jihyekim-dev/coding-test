function solution(players, callings) {
  // players: 선수들의 이름 arr (등수 오름차순 정렬)
  // callings: 해설진이 부른 이름 arr
  // 경주가 끝났을 때의 등수 기준 오름차순 정렬한 선수 이름 arr return
  const playersMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playersMap.set(players[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    const name = callings[i];
    const rank = playersMap.get(name);
    players[rank] = players[rank - 1];
    players[rank - 1] = name;

    playersMap.set(name, rank - 1);
    playersMap.set(players[rank], rank);
  }

  return players;
}
