module.exports = {
    transform: {
      "\\.js$": "babel-jest",
      "\\.jsx$": "babel-jest"
    },
    testMatch: ["**/__test__/**/*.test.(js|jsx)"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};