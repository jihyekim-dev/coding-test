function solution(new_id) {
  // new_id: 신규 유저가 입력한 아이디
  // 7단계 처리과정 거친 후 추천 아이디 return

  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^\w.-]/g, '');
  new_id = new_id.replace(/(\.)\1+/g, '.');
  if (new_id.at(0) === '.') new_id = new_id.slice(1);
  if (new_id.at(-1) === '.') new_id = new_id.slice(0, -1);
  if (!new_id) new_id = 'a';
  if (new_id.length > 15) new_id = new_id.slice(0, 15);
  if (new_id.at(-1) === '.') new_id = new_id.slice(0, -1);
  if (new_id.length < 3)
    new_id = new_id + new_id.at(-1).repeat(3 - new_id.length);

  return new_id;
}
