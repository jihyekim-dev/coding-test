function solution(phone_number) {
  // 문자열 phone_number 뒷 4자리만 제외하고 전부 *로 교체
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}
