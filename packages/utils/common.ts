export const isBool = (val: unknown) => typeof val === 'boolean';
export const isNumber = (val: unknown) => typeof val === 'number';
export function isNotNil<T>(value: T): value is NonNullable<T> {
  return typeof value != 'undefined' && value !== null;
}

export function addUnit() {}
