function solution(arr, queries) {
  // queries 순회하며 idx가 s <= idx <= e 이면 arr[i]++
  for (let i = 0; i < queries.length; i++) {
    const s = queries[i][0];
    const e = queries[i][1];
    arr.map((_, idx) => (idx >= s && idx <= e ? arr[idx]++ : arr[idx]));
  }
  return arr;
}
