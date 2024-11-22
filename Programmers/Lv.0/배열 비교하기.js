function solution(arr1, arr2) {
  // 두 배열의 길이가 다르다면, 긴 쪽이 더 큼
  // 두 배열의 길이가 같다면, 모든 원소의 합을 비교하여 큰 쪽이 큼. 같다면 같음
  // arr1이 크면 1, arr2가 크면 -1, 같으면 0을 return
  if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;
  return arr1.reduce(
    (result, v, i) => {
      result[0] += v;
      result[1] += arr2[i];
      if (i === arr1.length - 1)
        return result[0] > result[1] ? 1 : result[1] > result[0] ? -1 : 0;
      return result;
    },
    [0, 0]
  );
}
