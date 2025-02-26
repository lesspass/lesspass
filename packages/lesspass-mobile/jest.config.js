module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/setup-jest.js'],
  transformIgnorePatterns: [
    "/node_modules/(?!react-redux)/"
  ],
};
