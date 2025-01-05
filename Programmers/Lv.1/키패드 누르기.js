function solution(numbers, hand) {
  // numbers: 순서대로 누를 번호 arr (0~9 정수)
  // hand: 왼/오른손잡이 나타내는 문자열 (left or right)
  // 각 번호를 누른 엄지가 어느쪽인지 나타내는 연속된 문자열 (e.g. LRLRLR...) return
  let result = '';
  const map = new Map();
  const handCoord = new Map();
  for (let i = 1; i < 11; i++) {
    if ([1, 2, 3].includes(i)) map.set(i, [0, i - 1]);
    else if ([4, 5, 6].includes(i)) map.set(i, [1, i - 4]);
    else if ([7, 8, 9].includes(i)) map.set(i, [2, i - 7]);
    else map.set(0, [3, 1]);
  }
  handCoord.set('left', [3, 0]);
  handCoord.set('right', [3, 2]);

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const [x, y] = map.get(num);
    const left = handCoord.get('left');
    const right = handCoord.get('right');
    const leftD = Math.abs(left[0] - x) + Math.abs(left[1] - y);
    const rightD = Math.abs(right[0] - x) + Math.abs(right[1] - y);
    let newHand = '';

    if ([1, 4, 7].includes(num)) newHand = 'left';
    else if ([3, 6, 9].includes(num)) newHand += 'right';
    else if (leftD > rightD) newHand = 'right';
    else if (leftD === rightD) newHand = hand;
    else newHand = 'left';

    handCoord.set(newHand, [x, y]);
    result += newHand.at(0).toUpperCase();
  }
  return result;
}
