function solution(numer1, denom1, numer2, denom2) {
  // 두 분수 numer1/denom1, numer2/denom2를 더한 값을
  // 기약분수로 나타냈을 때 분자, 분모를 순서대로 담은 배열 return
  // 통분하고 분자 더하기 (통분 필용없는 경우라도 서로 같은 수를 곱했으므로 결과에 영향X)
  // 분자/분모의 최대 공약수 구한뒤 최대 공약수로 나눠서 기약 분수 만들어 return
  const denom = denom1 * denom2;
  const numer = numer1 * denom2 + numer2 * denom1;

  const f1 = [];
  const f2 = [];
  for (let i = 1; i <= numer; i++) {
    if (!(numer % i)) f1.push(i);
  }
  for (let i = 1; i <= denom; i++) {
    if (!(denom % i)) f2.push(i);
  }
  const gcf = Math.max(
    ...[...f1, ...f2].filter((v) => f1.includes(v) && f2.includes(v))
  );

  return [numer / gcf, denom / gcf];
}
