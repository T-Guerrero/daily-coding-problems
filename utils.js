export function equals(list1, list2) {
  if (list1.length !== list2.length)
    return false;

  return list1.every((element, i) => {
    return element == list2[i];
  })
}