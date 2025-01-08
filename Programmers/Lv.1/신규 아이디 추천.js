function solution(new_id) {
  // new_id: 신규 유저가 입력한 아이디
  // 7단계 처리과정 거친 후 추천 아이디 return

  const result = new_id
    .toLowerCase()
    .replace(/[^\w.-]/g, '')
    .replace(/(\.)\1+/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  return result.length < 3 ? result.padEnd(3, result.at(-1)) : result;
}
