function solution(id_pw, db) {
  // id_pw 배열과 db 배열을 비교하여 로그인 관련 메시지 return
  // 일치 : login, 아이디 불일치: fail, 아이디O비번불일치: wrong pw
  const result = db.filter(([id, pw]) => id === id_pw[0]);
  return result.length > 0
    ? result[0][1] === id_pw[1]
      ? 'login'
      : 'wrong pw'
    : 'fail';
}
