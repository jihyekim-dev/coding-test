const alphabet = Array(26)
  .fill(97)
  .map((v, i) => String.fromCharCode(v + i));

function solution(s, skip, index) {
  const edited = alphabet.filter((v) => ![...skip].includes(v));
  // s의 원소를 index 만큼 뒤로 밀기
  // 밀었는데 skip에 속한 문자가 될 경우, 해당 알파벳은 건너뛰고 밀기
  return [...s].reduce(
    (result, v) =>
      (result += edited[(edited.indexOf(v) + index) % edited.length]),
    ''
  );
}
