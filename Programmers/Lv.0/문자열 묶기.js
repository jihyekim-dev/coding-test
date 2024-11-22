function solution(strArr) {
  // strArr에서 길이가 같은 문자열 원소끼리 같은 그룹으로 묶기
  // 가장 많은 문자열을 보유한 그룹의 원소 개수를 return
  // strArr 순회하면서 문자열 길이를 idx로 두고 result arr에 접근하여 숫자 증가
  return strArr.reduce((result, v, i) => {
    result[v.length] = (result[v.length] ?? 0) + 1;
    if (i === strArr.length - 1 && i === 0) return 1;
    if (i === strArr.length - 1) return result.sort((a, b) => b - a)[0];
    return result;
  }, []);
}
