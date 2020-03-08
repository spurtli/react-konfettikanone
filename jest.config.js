module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/node_modules/"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/config/jest.js"]
};
