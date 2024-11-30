function solution(s) {
  // 문자열 s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열 return
  // 없을 경우, 빈 문자열을 return
  // result 객체 생성, 순회 돌면서 s의 원소를 키로 사용하여 접근해 개수 누적
  // Object.entries 이용하여 배열 생성, 개수ㄴ가 1개인 값들만 남기기
  const result = {};
  for (let i = 0; i < s.length; i++) {
    if (!result[s[i]]) result[s[i]] = 1;
    else result[s[i]]++;
  }
  const resultArr = Object.entries(result)
    .map(([k, v]) => (v < 2 ? k : ''))
    .sort();
  return resultArr.join('');
}
