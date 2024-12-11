function solution(numbers) {
  // numbers에서 서로 다른 인덱스에 있는 모든 원소를 뽑아 만들 수 있는
  // 모든 수를 오름차순으로 담은 배열 return
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }
  return result.sort((a, b) => a - b);
}
