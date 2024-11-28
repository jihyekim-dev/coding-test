const numbers = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

function solution(num) {
  // num는 영어 소문자 숫자가 조합된 문자열
  // num를 정수로 변환하여 return
  // 객체로 변환표 만들기
  // 변환표에서 키만 뽑아서 순회, num 내부에 키가 있다면 숫자로 교체
  return +Object.keys(numbers).reduce((result, v, i) => {
    if (num.includes(v)) result = result.replaceAll(v, numbers[v]);
    return result;
  }, num);
}
