function solution(str_list) {
  // l이 먼저 나오면 l 왼쪽, r이 먼저 나오면 r 오른쪽 return
  // 반복문 탈출 위해 for문 사용
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') return str_list.slice(0, i);
    if (str_list[i] === 'r') return str_list.slice(i + 1);
    if (i === str_list.length - 1) return [];
  }
}
