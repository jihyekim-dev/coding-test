function solution(arr) {
  const stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length < 0) stk.push(arr[i++]);
    else if (stk.length > -1 && stk.at(-1) === arr[i]) {
      stk.pop();
      i++;
    } else if (stk.length > -1 && stk.at(-1) !== arr[i]) stk.push(arr[i++]);
  }
  return stk.length > 0 ? stk : [-1];
}
