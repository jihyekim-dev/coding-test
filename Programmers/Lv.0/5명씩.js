function solution(names) {
  // names의 원소를 5개씩 묶어서 arr로 만들기
  // 해당 arr의 가장 앞 원소들만 모은 arr return
  // idx 0은 무조건 result에 포함, 이후 5의 배수인 idx만 result에 포함
  return names.reduce((result, name, i) => {
    if (!(i % 5)) result.push(name);
    return result;
  }, []);
}
