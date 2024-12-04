function solution(emergency) {
  // 응급도가 높은 순서대로 진료 순서 정한 배열 return
  // 응급도 순위 배열 만들기
  // 해당 배열에서 emergency 원소의 인덱스 찾아서 + 1 해서 mapping
  const rank = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => rank.indexOf(v) + 1);
}
