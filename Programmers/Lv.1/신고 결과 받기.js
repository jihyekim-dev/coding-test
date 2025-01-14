function solution(id_list, report, k) {
  // id_list: 이용자 ID arr
  // report: 각 이용자가 신고한 이용자 ID 정보 arr ('신고자ID 피신고자ID' 형태)
  // k: 게시판 이용 정지 기준이 되는 신고 횟수
  // 각 유저별로 정지 처리 결과 메일 받은 횟수 담은 배열 return
  const processed = new Map();
  for (let i = 0; i < report.length; i++) {
    const [user, reported] = report[i].split(' ');
    if (!processed.has(reported)) {
      processed.set(reported, new Set());
      processed.get(reported).add(user);
    }
    processed.get(reported).add(user);
  }

  const result = Array(id_list.length).fill(0);
  for (const [reported, users] of processed) {
    if (users.size < k) continue;
    users.forEach((v) => result[id_list.indexOf(v)]++);
  }

  return result;
}
