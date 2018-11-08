import forOwn = require('lodash.forown');
import camelCase = require('lodash.camelcase');
import snakeCase = require('lodash.snakecase');
import isPlainObject = require('lodash.isplainobject');
import isArray = require('lodash.isarray');

/**
 * @description walk tree
 * @param {Object | Array} obj
 * @param {Function} cb - callback
 * @returns {Object | Array}
 */
function walk(obj, cb): any {
  const x = isArray(obj) ? [] : {};

  forOwn(obj, (v, k) => {
    if (isPlainObject(v) || isArray(v)) v = walk(v, cb);

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
