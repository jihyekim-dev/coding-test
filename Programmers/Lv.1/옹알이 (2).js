function solution(babbling) {
  // babbling에서 발음할 수 있는 발음의 개수 return
  // 발음 가능한 단어: 네 가지 원소의 조합 (같은 단어 연속 발음은 불가능)
  const possible = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let str of babbling) {
    let flag = false;
    for (const origin of possible) {
      if (str.includes(origin.repeat(2))) flag = true;
      if (flag) continue;
      const regExp = new RegExp(origin, 'g');
      str = str.replace(regExp, ' ');
    }
    if (!str.replace(/\s/g, '')) count++;
  }

  return count;
}

function solution2(babbling) {
  const regExp1 = /(aya|ye|woo|ma)\1+/;
  const regExp2 = /^(aya|ye|woo|ma)+$/;
  let count = 0;

  for (const str of babbling) {
    if (!regExp1.test(str)) regExp2.test(str) && count++;
  }

  return count;
}
