function solution(name, yearning, photo) {
  // photo의 원소에 그리움 점수의 합 mapping -> return
  return photo.map((v, i) => {
    let sum = 0;
    for (let j = 0; j < v.length; j++) {
      sum += yearning[name.indexOf(v[j])] ?? 0;
    }
    return sum;
  });
}
