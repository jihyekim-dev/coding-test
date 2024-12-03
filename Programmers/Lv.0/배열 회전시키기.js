function solution(numbers, direction) {
  // numbers의 원소를 direction 방향으로 한 칸씩 밀기
  // numbers 분해해서 제일 앞 / 뒤 원소 교체
  return direction === 'right'
    ? [numbers.at(-1), ...numbers.slice(0, -1)]
    : [...numbers.slice(1), numbers[0]];
}
