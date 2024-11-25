function solution(babbling) {
  // 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장
  // 발음할 수 있는 문자열은 위의 문자열의 조합으로만 구성되어 있음
  // babbling을 순회, 각 원소에 조건 문자열이 있는지 확인
  // 있다면, 원소에서 조건 문자열을 특수문자로 변경한 뒤 남은 게 있는 지 확인
  // 없다면 && 위의 경우에서 남은 문자열이 있다면 발음 할 수 없는 문자열
  // 발음 할 수 있는 문자열의 개수를 count하여 return
  const condition = ['aya', 'ye', 'woo', 'ma'];
  return babbling.reduce((result, v, i) => {
    let filteredV = v;
    for (let j = 0; j < condition.length; j++) {
      if (filteredV.includes(condition[j])) {
        filteredV = filteredV.replace(condition[j], ';');
      }
    }
    const completed = filteredV.replaceAll(';', '');
    if (!completed) result.push(v);
    return result;
  }, []).length;
}
