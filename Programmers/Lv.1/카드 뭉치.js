function solution(cards1, cards2, goal) {
  // cards1, cards2 배열의 단어를 순서대로 사용하여 goal 배열의 단어를
  // 완성할 수 있다면, 'Yes' / 없다면 'No' return
  for (const str of goal) {
    if (str === cards1[0]) cards1.shift();
    else if (str === cards2[0]) cards2.shift();
    else return 'No';
  }
  return 'Yes';
}
