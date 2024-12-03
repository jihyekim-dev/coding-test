function solution(polynomial) {
  // 동류항끼리 더한 결과값 문자열로 return
  // polynomial을 공백으로 split
  // 위의 배열 순회하며 result arr에 x / num 따로 누적
  // 결과값 변형하여 문자열로 return
  const splited = polynomial.split(' ');
  const [xInt, int] = splited.reduce(
    ([x, num], v) => {
      if (v.includes('x')) x += v.length === 1 ? 1 : +v.replace(/x/g, '');
      else if (v !== '+') num += +v;
      return [x, num];
    },
    [0, 0]
  );
  const xStr = `${xInt ? (xInt === 1 ? 'x' : xInt + 'x') : ''}`;
  const intStr = `${int ? (xInt ? ' + ' + int : int) : ''}`;
  return xStr + intStr;
}
