function quickSort(list) {
  const [head, ...rest] = list;

  const lessThanHead = rest.filter(p => p < head);
  const greaterThanHead = rest.filter(p => p >= head);

  return [
    ...(lessThanHead.length > 0 ? quickSort(lessThanHead) : []),
    head,
    ...(greaterThanHead.length > 0 ? quickSort(greaterThanHead) : [])
  ];
}
