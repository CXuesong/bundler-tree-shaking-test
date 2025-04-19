export function range(start: number, count: number): number[] {
  const result: number[] = [];
  for (let i = start; i < start + count; i++) {
    result.push(i);
  }
  return result;
}
