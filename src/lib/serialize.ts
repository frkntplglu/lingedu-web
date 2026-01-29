/**
 * Safe JSON serialization for Next.js getServerSideProps
 * Handles circular references, Date objects, BigInt, and Sequelize models
 */

function toPlain(value: any) {
  if (value?.toJSON) {
    return value.toJSON();
  }
  return value;
}

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export function serializeForSSR(
  input: unknown,
  seen = new WeakSet()
): JSONValue {
  if (
    input === null ||
    typeof input === 'string' ||
    typeof input === 'number' ||
    typeof input === 'boolean'
  ) {
    return input;
  }

  if (input instanceof Date) {
    return input.toISOString();
  }

  if (typeof input === 'bigint') {
    return input.toString();
  }

  if (Array.isArray(input)) {
    return input.map(v => serializeForSSR(v, seen));
  }

  if (typeof input === 'object') {
    if (seen.has(input)) {
      return null; // Circular reference detected
    }
    seen.add(input);

    const plain = toPlain(input);
    const result: Record<string, JSONValue> = {};

    for (const [key, value] of Object.entries(plain)) {
      result[key] = serializeForSSR(value, seen);
    }

    return result;
  }

  return null;
}

// Alias for backwards compatibility
export function toJSON<T>(data: T): T {
  return serializeForSSR(data) as T;
}
