module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['**/test/**/*.test.(ts|tsx)?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
