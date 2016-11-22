'use strict';

var forOwn        = require('lodash.forown');
var snakeCase     = require('lodash.snakecase');
var camelCase     = require('lodash.camelcase');
var isPlainObject = require('lodash.isplainobject');

/**
 * @description walk tree
 * @param {Object} obj
 * @param {Function} cb - callback
 */
function walk(obj, cb) {
  var x = {};

  forOwn(obj, function(v, k) {
    if(isPlainObject(v)) {
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
  toCamel,
  toSnake
};
