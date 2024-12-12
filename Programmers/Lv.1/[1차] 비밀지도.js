function solution(n, arr1, arr2) {
  // arr1과 arr2의 원소를 이진수로 변환
  // 각 배열 원소의 문자열 비교. arr2 원소의 문자열과 비교했을 때,
  // 한 쪽이라도 1이라면 1, 아니라면 0으로 변경
  // 1 = '#', 0 = ' '으로 변경해서 return
  return arr1.map((v, i) => {
    // 비트 연산 X
    // const v1 = v.toString(2).padStart(n, '0');
    // const v2 = arr2[i].toString(2).padStart(n, '0');

    // let result = '';
    // for (let i = 0; i < v1.length; i++) {
    //   if (v1[i] === '1' || v2[i] === '1') result += '1';
    //   else result += '0';
    // }
    // 비트 연산 O (비트 OR 연산)
    const result = (v | arr2[i]).toString(2).padStart(n, '0');
    return result.replace(/0|1/g, (a) => (+a ? '#' : ' '));
  });
}
