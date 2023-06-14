export default function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false;
    return true;
  }

  if (typeof a === "object" && a !== null) {
    if (typeof b !== "object" || b === null) return false;

    const keysOfA = Object.keys(a);
    const keysOfB = Object.keys(b);
    if (
      keysOfA.length !== keysOfB.length ||
      keysOfA.some((k1) => !keysOfB.includes(k1))
    )
      return false;

    for (let i = 0; i < keysOfA.length; i++)
      if (
        !deepEqual(
          a[keysOfA[i] as keyof typeof a],
          b[keysOfA[i] as keyof typeof b]
        )
      )
        return false;

    return true;
  }

  return false;
}
