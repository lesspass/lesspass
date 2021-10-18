export function sortByNewestFirst(items) {
  return items.sort((i1, i2) => {
    const i1CreatedAt = new Date(i1.created);
    const i2CreatedAt = new Date(i2.created);
    if (i1CreatedAt > i2CreatedAt) {
      return -1;
    }
    if (i1CreatedAt < i2CreatedAt) {
      return 1;
    }
    return 0;
  });
}
