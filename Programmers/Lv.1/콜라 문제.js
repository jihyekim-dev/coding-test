function solution(a, b, n) {
  // 빈 병 a개를 가져다주면 b개의 콜라를 주는 마트가 있을 때,
  // n개의 빈 병을 갖고 있는 사람이 받을 수 있는 콜라 병 수 return
  let result = 0;
  let remain = n;
  while (remain >= a) {
    const exchange = parseInt(remain / a) * b;
    result += exchange;
    remain = (remain % a) + exchange;
  }
  return result;
}
