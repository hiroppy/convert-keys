'use strict';

import test from 'ava';
import * as convertKeys from '../';

test('should return an empty object when give an empty object', (t) => {
  t.deepEqual(convertKeys.toCamel({}), {});
});

test('should return an empty array when give an empty array', (t) => {
  t.deepEqual(convertKeys.toCamel([]), []);
});

test('should return object as coverted camel case', (t) => {
  const obj = {
    'hoge_fuga': 1,
    'hogeHoge': {
      'piyo_piyo': 'aaaa',
      'fuga_fuga': 'bbbb'
    },
    'piyo_array': [
      {'foo_bar': 'a'},
      {'foo_bar': 'b'}
    ]
  };

  const res = {
    hogeFuga: 1,
    hogeHoge: {
      piyoPiyo: 'aaaa',
      fugaFuga: 'bbbb'
    },
    piyoArray: [
      {fooBar: 'a'},
      {fooBar: 'b'}
    ]
  };

  t.deepEqual(convertKeys.toCamel(obj), res);
});

test('should return object as coverted snake case', (t) => {
  const obj = {
    'hoge_fuga': 1,
    'hogeHoge': {
      'piyo_piyo': 'aaaa',
      'fuga_fuga': 'bbbb',
      'testTest': 'test'
    },
    'piyo_array': [
      {'fooBar': 'a'},
      {'fooBar': 'b'}
    ]
  };

  const res = {
    'hoge_fuga': 1,
    'hoge_hoge': {
      'piyo_piyo': 'aaaa',
      'fuga_fuga': 'bbbb',
      'test_test': 'test'
    },
    'piyo_array': [
      {'foo_bar': 'a'},
      {'foo_bar': 'b'}
    ]
  };

  t.deepEqual(convertKeys.toSnake(obj), res);
});
