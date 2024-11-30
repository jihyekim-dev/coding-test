function solution(spell, dic) {
  // 소문자가 들어있는 spell 배열의 모든 원소를 모두 한 번씩만 사용
  // 만들수 있는 단어가 dic에 있다면, 1 / 없다면, 2 return
  // dic 순회, 원소 안에 spell의 요소가 다 들어있는지 & 한 번씩만 썼는지 확인
  const count = dic.reduce((result, word) => {
    for (let i = 0; i < spell.length; i++) {
      if (!word.includes(spell[i])) return result;

      const pattern = new RegExp(`${spell[i]}`);
      word = word.replace(pattern, '');
      if (word.includes(spell[i])) return result;
    }
    return ++result;
  }, 0);

  return count ? 1 : 2;
}
