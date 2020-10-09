import forOwn from 'lodash.forown';
import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import isPlainObject from 'lodash.isplainobject'

function walk(obj, cb): any {
  const x = Array.isArray(obj) ? [] : {};

  forOwn(obj, (v, k) => {
    if (isPlainObject(v) || Array.isArray(v)) v = walk(v, cb);

    x[cb(k)] = v;
  });

  return x;
}

export function toCamel<T>(obj: Object): T {
  return walk(obj, (k) => camelCase(k));
};

export function toSnake<T>(obj: Object): T {
  return walk(obj, (k) => snakeCase(k));
};
