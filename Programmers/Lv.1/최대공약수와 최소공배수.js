function gcf(n, m) {
  const cf = [];
  for (let i = 1; i <= m; i++) {
    if (!(n % i) && !(m % i)) cf.push(i);
  }
  return Math.max(...cf);
}

function lcm(n, m) {
  let lcm = 0;
  let i = n;
  while (!lcm) {
    if (!(i % n) && !(i % m)) lcm = i;
    i++;
  }
  return lcm;
}

function solution(n, m) {
  // 두 자연수 n, m의 최대공약수, 최소공배수 return
  return [gcf(n, m), lcm(n, m)];
}
