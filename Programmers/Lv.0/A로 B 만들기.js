function solution(before, after) {
  // before의 순서를 바꿔서 after를 만들 수 있다면 1, 아니면 0을 return
  // 둘의 구성요소가 모두 같다면 만들 수 있음
  // 정규표현식 이용해서 원소를 하나씩 ''로 대체하며 길이 비교
  let result = 1;
  for (str of before) {
    const pattern = new RegExp(`${str}`, 'g');
    if (
      before.replace(pattern, '').length === after.replace(pattern, '').length
    )
      continue;
    else {
      result = 0;
      break;
    }
  }
  return result;
}
