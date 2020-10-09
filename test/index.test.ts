import * as convertKeys from '../';

test('should return an empty object when give an empty object', () => {
  expect(convertKeys.toCamel<{}>({})).toEqual({});
});

test('should return an empty array when give an empty array', () => {
  expect(convertKeys.toCamel<[]>([])).toEqual([]);
});

test('should return object as converted camel case', () => {
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

  expect(convertKeys.toCamel<typeof res>(obj)).toEqual(res);
});

test('should return object as converted snake case', () => {
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

  expect(convertKeys.toSnake<typeof res>(obj)).toEqual(res);
});
