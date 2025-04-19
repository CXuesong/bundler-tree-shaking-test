export function sort<T>(array: Iterable<T>): T[] {
  const result = [...array];
  // I know this is not a good way to sort, but it's just for demonstration purposes.
  return result.sort();
}
