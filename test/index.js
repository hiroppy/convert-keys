'use strict';

const test        = require('ava');
const pify        = require('pify');
const convertKeys = require('../');

test('should return object as coverted camel case', async (t) => {
  const obj = {
    'hoge_fuga': 1,
    'hogeHoge': {
      'piyo_piyo': 'aaaa',
      'fuga_fuga': 'bbbb'
    }
  };

  const res = {
    hogeFuga: 1,
    hogeHoge: {
      piyoPiyo: 'aaaa',
      fugaFuga: 'bbbb'
    }
  };

  t.deepEqual(convertKeys.toCamel(obj), res);
});

test('should return object as coverted snake case', async (t) => {
  const obj = {
    'hoge_fuga': 1,
    'hogeHoge': {
      'piyo_piyo': 'aaaa',
      'fuga_fuga': 'bbbb',
      'testTest': 'test'
    }
  };

  const res = {
    'hoge_fuga': 1,
    'hoge_hoge': {
      'piyo_piyo': 'aaaa',
      'fuga_fuga': 'bbbb',
      'test_test': 'test'
    }
  };

  t.deepEqual(convertKeys.toSnake(obj), res);
});
