function solution(s) {
  // 문자열 s의 각 원소에 대해 자신보다 앞에 나왔으면서 가장 가까운
  // 같은 글자가 어디 있는지 return
  return [...s].map((v, i) => {
    const prevIdx = s.slice(0, i).lastIndexOf(v);
    return prevIdx < 0 ? prevIdx : i - prevIdx;
  });
}
