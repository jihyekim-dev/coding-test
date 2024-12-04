function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

function solution(balls, share) {
  // balls개의 구슬 중 share개의 구슬을 고르는 경우의 수 return
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}
