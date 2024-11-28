function solution(order) {
  // order에 3의 배수가 포함된 만큼 count 증가시키기
  return [...(order + '')].reduce((result, v) => {
    if (+v !== 0 && !(+v % 3)) result++;
    return result;
  }, 0);
}
