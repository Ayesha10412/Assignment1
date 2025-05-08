function concatenateArrays<T>(...arrays: T[][]): T[] {
  return [].concat(...arrays);
}

