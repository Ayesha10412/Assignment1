function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}
