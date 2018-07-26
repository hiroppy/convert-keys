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
function walk(obj, cb): Object | Array<any> {
  const x = isArray(obj) ? [] : {};

  forOwn(obj, (v, k) => {
    if (isPlainObject(v) || isArray(v)) v = walk(v, cb);

    x[cb(k)] = v;
  });

  return x;
}

export function toCamel(obj: Object) {
  return walk(obj, (k) => camelCase(k));
};

export function toSnake(obj: Object) {
  return walk(obj, (k) => snakeCase(k));
};
