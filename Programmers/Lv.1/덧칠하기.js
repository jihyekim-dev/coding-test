function solution(n, m, section) {
  // 롤러로 페인트칠해야 하는 최소 횟수 return
  // n: 구역 개수, m: 롤러 길이

  // section의 상태를 담은 배열을 만들고 직접 순회했을 때
  //   const walls = Array(n + 1)
  //     .fill()
  //     .map((_, i) => {
  //       if (section.includes(i)) return 0;
  //       return 1;
  //     });
  //   let count = 0;
  //   for (let i = 1; i < walls.length; i++) {
  //     if (walls[i]) continue;
  //     for (let j = i; j < m + i; j++) {
  //       walls[j] = 1;
  //     }
  //     count++;
  //   }
  //   return count;

  // 이미 칠해진 영역의 끝 인덱스를 가리키는 pointer를 뒀을 때
  let count = 0;
  let painted = 0;

  for (const num of section) {
    if (painted < num) {
      painted = num + m - 1;
      count++;
    }
  }
  return count;
}
