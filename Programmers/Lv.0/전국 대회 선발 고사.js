function solution(rank, attendance) {
  // 0 ~ n - 1까지 n명의 학생. 참석한 학생 중에서 등수가 높은 3명을 선발
  // rank: 모든 학생의 등수, attendence: 모든 학생의 참여 가능 여부
  // 선발된 학생: a, b, c 가 있을 때 10,000 * a + 100 * b + c return
  // 인덱스는 유지하면서 참석 여부에 따라 학생을 갈라야 함
  const student = rank
    .reduce((result, v, i) => {
      if (attendance[i]) result[v] = { index: i, rank: v };
      return result;
    }, [])
    .filter((v) => v !== undefined);
  return 10000 * student[0].index + 100 * student[1].index + student[2].index;
}
