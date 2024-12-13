function solution(a, b) {
  // 날짜가 주어지면 요일을 return
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return day[new Date(2016, a - 1, b).getDay()];
  // new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
