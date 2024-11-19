function generateUniqueKey(prefix: string = "key"): string {
  return `${prefix}_${new Date().getTime()}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

export default generateUniqueKey;
