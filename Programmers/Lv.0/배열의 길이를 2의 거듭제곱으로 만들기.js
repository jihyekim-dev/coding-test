function solution(arr) {
  // arr의 길이가 정수 2의 거듭제곱이 되도록 arr 뒤에 0을 추가
  // 최소한의 개수로 0을 추가한 배열을 return
  // arr.length 보다 큰 2의 거듭제곱 값 찾기
  // 지수를 올리면서 arr.length 보다 커지면 해당 지수를 가지고 추가해야 할 0 개수 계산
  let exponent = 0;
  while (2 ** exponent < arr.length) exponent++;
  return [...arr, ...Array(2 ** exponent - arr.length).fill(0)];
}
