function solution(keymap, targets) {
  // targets의 원소를 만들기 위해 각각 키를 몇 번 눌러야 하는지 mapping
  // 키 누른 횟수를 count에 누적해서 return
  const result = [];
  for (const target of targets) {
    let total = 0;

    for (const str of target) {
      const counts = keymap.reduce((result, v) => {
        const index = v.indexOf(str);
        if (index !== -1) result.push(index + 1);
        return result;
      }, []);

      if (!counts.length) {
        total = -1;
        break;
      }
      total += Math.min(...counts);
    }
    result.push(total);
  }
  return result;
}
