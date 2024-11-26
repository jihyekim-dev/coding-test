function solution(A, B) {
  // 문자열을 민다: 각 문자를 오른쪽으로 한 칸씩 이동, 마지막 문자는 맨 앞으로 이동
  // A를 밀어서 B가 될 수 있다면, 밀어야 하는 최소 횟수를 return
  // 만약 밀어서 B가 될 수 없다면, -1 을 return
  // A !== B 동안 반복, A를 밀면서 count 증가 시키기
  let count = 0;
  let editedA = A;
  while (editedA !== B) {
    const lastChar = editedA.at(-1);
    editedA = lastChar + editedA.slice(0, -1);
    if (editedA === A) {
      count = -1;
      break;
    }
    count++;
  }
  return count;
}
