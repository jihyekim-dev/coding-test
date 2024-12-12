function solution(array, commands) {
  // 숫자 배열 array를 commands의 원소에 따라 조작했을 때 나온 결과 배열 return
  // commands의 원소 i ~ j까지 자른 array 정렬 -> k 번째 원소 뽑기
  return commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  );
}
