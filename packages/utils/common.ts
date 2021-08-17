import { isEmpty, isNull } from 'lodash';
import warn from './error';

const SCOPE = 'common';

export const EmptyObject = Object.create(null);
export const isBool = (val: unknown) => typeof val === 'boolean';
export const isNumber = (val: unknown) => typeof val === 'number';
export const isString = (val: unknown) => typeof val === 'string';
export function isNotNil<T>(value: T): value is NonNullable<T> {
  return typeof value != 'undefined' && value !== null;
}

export function addUnit(prop: string | number) {
  if (isString(prop)) {
    return prop;
  } else if (isNumber(prop)) {
    return prop + 'px';
  } else {
    warn(SCOPE, 'prop  must be string or number');
  }
}

export const RadiumSqrt = (x: number, y: number) => {
  return Number.parseFloat(
    Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)).toFixed(2),
  );
};

export const UPDATE_MODEL_EVENT = 'update:modelValue';

export const delay = (callback: (...any) => void, delayTime: number) => {
  const flag = setTimeout(() => {
    clearTimeout(flag);
    callback();
  }, delayTime);
};

export const processInvalidProp = <T extends object>(props: T) => {
  Object.keys(props).forEach(_ => {
    const propsValue = props[_];
    if (propsValue === '' || propsValue === undefined) {
      Reflect.deleteProperty(props, _);
    }
  });
  return props;
};
