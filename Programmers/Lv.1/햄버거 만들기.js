function solution(ingredient) {
  let count = 0;
  // 진짜 지우기는 해야 함...
  // 근데 str replace는 효율이 안 나옴
  // 그럼 ingredient arr를 index = key, value = value 삼아서 obj 또는 map으로 만들면?
  // 이러면 delete가 쉽잫아 바로 접근가능해서 O(1)이구!!
  for (let front = 0; front < ingredient.length - 3; ) {
    const one = ingredient[front];
    const two = ingredient[front + 1];
    const three = ingredient[front + 2];
    const four = ingredient[front + 3];
    console.log('front', front, ' : ', one, two, three, four, count);
    if (one === 1 && two === 2 && three === 3 && four === 1) {
      count++;
      front += 4;
    } else {
      front++;
    }
  }

  return count;
}
