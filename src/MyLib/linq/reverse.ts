export function reverse<T>(array: Iterable<T>): T[] {
  const result = [...array];
  return result.reverse();
}
