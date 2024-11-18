function solution(todo_list, finished) {
  // 두 배열이 서로 대칭적. todo_list를 filter
  return todo_list.filter((_, i) => !finished[i]);
}
