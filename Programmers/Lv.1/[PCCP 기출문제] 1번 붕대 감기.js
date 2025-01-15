function solution(bandage, health, attacks) {
  // bandage: [시전시간(t), 초당회복량(x), 추가회복량(y)] 형태의 arr
  // health: 최대 체력
  // attacks: [공격 시간, 피해량] 형태의 arr
  // 모든 공격이 끝난 직후 남은 체력 return (죽었을 경우 -1 return)
  const [t, x, y] = bandage;
  let pt = 0;
  let hp = health;
  for (let i = 0; i < attacks.length; i++) {
    const [at, d] = attacks[i];
    if (pt !== at) {
      const acc = at - pt;
      const successCount = Math.floor(acc / t);
      hp = Math.min(
        health,
        hp + acc * x + y * (successCount >= 1 ? successCount : 0)
      );
    }

    hp -= d;
    if (hp < 1) return -1;
    else pt = at + 1;
  }

  return hp;
}
