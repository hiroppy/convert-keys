# convert-keys

[![Build Status](https://travis-ci.org/abouthiroppy/convert-keys.svg?branch=master)](https://travis-ci.org/abouthiroppy/convert-keys)
[![codecov](https://codecov.io/gh/abouthiroppy/convert-keys/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/convert-keys)
[![npm version](https://badge.fury.io/js/convert-keys.svg)](https://badge.fury.io/js/convert-keys)

# Install
```
$ npm install convert-keys
```

# Usage
```javascript
const convertKeys = require('convert-keys');

const obj = {
  'hoge_fuga': 1,
  'hogeHoge': {
    'piyo_piyo': 'aaaa',
    'fuga_fuga': 'bbbb'
  }
};

convertKeys.toCamel(obj);

// output
{
  'hogeFuga': 1,
  'hogeHoge': {
    'piyoPiy'o: 'aaaa',
    'fugaFuga': 'bbbb'
  }
}

convertKeys.toSnake(obj);

// output
{
  'hoge_fuga': 1,
  'hoge_hoge': {
    'piyo_piyo': 'aaaa',
    'fuga_fuga': 'bbbb'
  }
}

```
