function solution(sides) {
  // sides는 자연수 배열. 가장 큰 원소가 나머지 두 원소보다 작으면 1
  // 작지 않다면, 2를 return
  const maxIdx = sides.indexOf(Math.max(...sides));
  const sum = sides.reduce((result, v, i) => {
    if (i !== maxIdx) return (result += v);
    return result;
  }, 0);
  return sides[maxIdx] < sum ? 1 : 2;
}
