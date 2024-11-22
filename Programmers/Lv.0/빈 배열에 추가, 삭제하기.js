function solution(arr, flag) {
  // flag 순회하면서 원소가 true이면 arr[i]를 arr[i] * 2번 추가
  // 원소가 false면 result arr에서 arr[i]개 원소 제거
  return flag.reduce((result, flag, idx) => {
    for (let i = 0; i < arr[idx] * 2; i++) {
      flag && result.push(arr[idx]);
      !flag && i < arr[idx] && result.pop();
    }
    return result;
  }, []);
}
