export function equals(list1, list2) {
  if (list1.length !== list2.length)
    return false;

  return list1.every((element, i) => {
    return element == list2[i];
  })
}

export function factorial(n) {
  let result = 1n;
  for(let i = n; i > 1; i--) result *= BigInt(i);

  return result;
}