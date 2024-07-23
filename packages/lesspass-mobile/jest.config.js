module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/setup-jest.js'],
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
};
