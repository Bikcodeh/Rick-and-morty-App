module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        "ts-jest": {
            transformerConfig: {
                transformIgnorePatterns: [
                    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
                    "jest-runner",
                ],
            },
        },
    },
    //setupFiles: ['./jest.setup.js']
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    setupFilesAfterEnv: ['jest-canvas-mock'],
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: [
        '/__tests__/utils',
      ],
}
