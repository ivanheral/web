// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  testEnvironment: 'jsdom',
  maxWorkers: 1,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/(*.)+(test|spec).+(tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
})

const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}
module.exports = createJestConfig(customJestConfig)
