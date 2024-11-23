function solution(arr, delete_list) {
  // arr의 원소가 delete_list에 있는 원소라면 모두 제거
  // arr의 남은 원소들은 기존 순서를 유지한 채 return
  return delete_list.reduce((result, toDelete) => {
    if (arr.includes(toDelete)) {
      return result.filter((arrV) => arrV !== toDelete);
    }
    return result;
  }, arr);
}
