function solution(picture, k) {
  // picture의 각 원소를 str이라고 하면,
  // str을 순회하며 각 원소를 k번 추가하여 하나의 문자열로 만들기
  // 이렇게 수정한 str을 picture에 k번 추가
  return picture.reduce((result, v) => {
    const newStr = [...v].map((str) => str.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      result.push(newStr);
    }
    return result;
  }, []);
}
