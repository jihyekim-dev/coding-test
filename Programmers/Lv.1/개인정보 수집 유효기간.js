function solution(today, terms, privacies) {
  // 파기해야 할 개인정보 번호 (privacies arr 원소의 idx + 1)를
  // 오름차순으로 담은 정수 arr return
  const result = [];
  const termsMap = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [key, value] = terms[i].split(' ');
    termsMap.set(key, +value);
  }

  for (let i = 0; i < privacies.length; i++) {
    const [date, kind] = privacies[i].split(' ');
    const [_, month] = date.split('.');
    if (
      new Date(date).setMonth(+month - 1 + termsMap.get(kind)) <=
      new Date(today)
    )
      result.push(i + 1);
  }
  return result.sort((a, b) => a - b);
}
