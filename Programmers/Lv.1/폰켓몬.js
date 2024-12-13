function solution(nums) {
  // nums에서 N / 2개의 원소 선택. 가장 많은 종류를 선택하는 방법을 찾아,
  // 원소 종류 개수 return
  const halfN = nums.length / 2;
  const kind = new Set(nums).size;
  return halfN > kind ? kind : halfN;
}
