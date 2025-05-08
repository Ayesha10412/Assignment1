function formatString(input: string, toUpper?: boolean): string {
  const useUpper = toUpper !== false;
  return useUpper ? input.toUpperCase() : input.toLowerCase();
}


