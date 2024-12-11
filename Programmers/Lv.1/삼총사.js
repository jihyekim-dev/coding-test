function solution(number) {
  // number에서 합이 0인 원소 3개 조합을 모두 찾아서 return
  //   const result = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const n1 = number[i],
          n2 = number[j],
          n3 = number[k];

        // 중복 거르는 경우
        // const trio = [n1, n2, n3].sort((a, b) => a - b).join('');
        // if (!(n1 + n2 + n3) && !result.includes(trio)) result.push(trio);

        // 안 거르는 경우
        if (!(n1 + n2 + n3)) count++;
      }
    }
  }

  //   return result.length;
  return count;
}
