function concatenateArrays<T>(...arrays: T[][]): T[]{
    return [].concat(...arrays);
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]); 