function solution(common) {
  // common은 등차/등비수열
  // 마지막 숫자 다음으로 올 숫자를 return
  // 등차/등비수열인지 판단
  // 다음 마지막 숫자에 등차/등비 더하거나 곱해서 return
  const diff = common[1] - common[0];
  const isGeometric = common[2] - common[0] !== diff * 2;
  return isGeometric
    ? (common.at(-1) * common[1]) / common[0]
    : common.at(-1) + diff;
}
