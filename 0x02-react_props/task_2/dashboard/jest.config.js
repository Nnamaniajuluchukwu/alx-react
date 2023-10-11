module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },

    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(png|jpg|jpeg|gif|svg)$": `${process.cwd()}/__mock__/file-mock.js`
    },
    setupFilesAfterEnv: [
      "./config/setupTests.js"
    ]
}
