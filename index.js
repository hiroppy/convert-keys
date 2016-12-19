'use strict';

var forOwn        = require('lodash.forown');
var snakeCase     = require('lodash.snakecase');
var camelCase     = require('lodash.camelcase');
var isPlainObject = require('lodash.isplainobject');
var isArray       = require('lodash.isarray');

/**
 * @description walk tree
 * @param {Object | Array} obj
 * @param {Function} cb - callback
 * @returns {Object | Array}
 */
function walk(obj, cb) {
  var x = isArray(obj) ? [] : {};

  forOwn(obj, function(v, k) {
    if (isPlainObject(v) || isArray(v)) {
      v = walk(v, cb);
    }

    x[cb(k)] = v;
  });

  return x;
}

var toCamel = function(obj) {
  var newObj = walk(obj, function(k) {
    return camelCase(k);
  });

  return newObj;
};

var toSnake = function(obj) {
  var newObj = walk(obj, function(k) {
    return snakeCase(k);
  });

  return newObj;
};

module.exports = {
  toCamel: toCamel,
  toSnake: toSnake
};
