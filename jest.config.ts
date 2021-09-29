export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "@modules/(.*)": "<rootDir>/src/modules/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@shared/(.*)": "<rootDir>/src/shared/$1",
    "@errors/(.*)": "<rootDir>/src/errors/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
};
