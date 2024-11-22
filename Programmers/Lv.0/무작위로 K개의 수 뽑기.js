function solution(arr, k) {
  // arr는 무작위의 수가 담긴 배열
  // arr에서 k개의 원소를 result 배열에 추가하여 return
  // arr를 겹치지 않는 수만 남도록 filter
  // 만약 result 배열의 길이가 k 보다 작은 경우 부족한 부분은 -1로 채워서 return
  // 반대의 경우 result 배열을 return
  const cleaned = arr.reduce((result, v) => {
    !result.includes(v) && result.push(v);
    return result;
  }, []);
  return cleaned.length < k
    ? Array(k)
        .fill(-1)
        .map((v, i) => cleaned[i] ?? v)
    : cleaned.slice(0, k);
}
