module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['<rootDir>/src/setup-jest.js'],
  transformIgnorePatterns: [
    "/node_modules/(?!react-redux)/"
  ],
};
