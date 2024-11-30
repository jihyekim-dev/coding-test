function solution(numbers) {
  // numbers 원소 중 두개를 곱해 만들 수 있는 최댓값 return
  // numbers 순회, 나머지 원소와 곱한 값을 모두 result에 저장, 마지막에 max 구하기
  const candidate = numbers.reduce((result, v, i) => {
    numbers.forEach((n, j) => {
      if (i !== j) result.push(v * n);
    });
    return result;
  }, []);
  return Math.max(...candidate);
}
