function solution(food) {
  // food내 원소를 좌우에 동일한 개수로 배치한 문자열 return (0번 원소 제외)
  let front = '';
  let back = '';
  for (let i = 1; i < food.length; i++) {
    const count = parseInt(food[i] / 2);
    front += `${i}`.repeat(count);
    back = `${i}`.repeat(count) + back;
  }
  return front + '0' + back;
}
