import warn from './error';

const SCOPE = 'common';

const EmptyObject = Object.create(null);
const isBool = (val: unknown) => typeof val === 'boolean';
const isNumber = (val: unknown) => typeof val === 'number';
const isString = (val: unknown) => typeof val === 'string';

function isNotNil<T>(value: T): value is NonNullable<T> {
  return typeof value !== 'undefined' && value !== null;
}

function addUnit(prop: string | number) {
  if (isString(prop)) {
    return prop;
  } else if (isNumber(prop)) {
    return `${prop}px`;
  } else {
    warn(SCOPE, 'prop  must be string or number');
  }
}

const RadiumSqrt = (x: number, y: number) => {
  return Number.parseFloat(Math.sqrt(x ** 2 + y ** 2).toFixed(2));
};

const UPDATE_MODEL_EVENT = 'update:modelValue';

const delay = (callback: (...any) => void, delayTime: number) => {
  const flag = setTimeout(() => {
    clearTimeout(flag);
    callback();
  }, delayTime);
};

const processInvalidProp = <T extends object>(props: T) => {
  Object.keys(props).forEach(_ => {
    const propsValue = props[_];
    if (propsValue === '' || propsValue === undefined) {
      Reflect.deleteProperty(props, _);
    }
  });
  return props;
};

export {
  delay,
  isBool,
  isNumber,
  isString,
  isNotNil,
  addUnit,
  RadiumSqrt,
  EmptyObject,
  processInvalidProp,
  UPDATE_MODEL_EVENT,
};
