function solution(myStr) {
  // myStr을 'a', 'b', 'c' 구분자를 이용해 구분
  // 구분자 사이에 다른 문자가 없을 경우 아무것도 저장하지 않음
  // return할 배열이 빈 배열이면 ['EMPTY']를 return
  // 순회 한 번에 a, b, c를 모두 구분자로 사용
  // 원소가 구분자인지 아닌지 판단, 구분자면 startIdx 설정
  // 구분자가 아니면 endIdx 설정
  // startIdx와 endIdx가 모두 있다면 result arr에 push 한 뒤, idx 둘 다 초기화
  const result = [];
  let startIdx = -1;
  let endIdx = -1;

  for (let i = 0; i < myStr.length; i++) {
    const isSeparator = ['a', 'b', 'c'].includes(myStr[i]);
    const isNextSeparator = ['a', 'b', 'c'].includes(myStr[i + 1]);

    if (i === 0 && !isSeparator) startIdx = 0;
    if (isSeparator) startIdx = i + 1;
    else if (isSeparator && i === myStr.length - 1) startIdx = -1;

    if (!isSeparator && i === myStr.length - 1) endIdx = undefined;
    else if (!isSeparator && !isNextSeparator) continue;
    else if (!isSeparator && isNextSeparator) endIdx = i + 1;

    if (
      (startIdx > -1 && endIdx > -1) ||
      (startIdx > -1 && i === myStr.length - 1)
    ) {
      const item = myStr.slice(startIdx, endIdx);
      item === '' ? null : result.push(item);
      startIdx = -1;
      endIdx = -1;
    }
  }
  return result.length ? result : ['EMPTY'];
}
