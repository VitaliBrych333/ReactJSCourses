module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "./report.html",
        expand: true,
      },
    ],
  ],
  automock: false,
  setupFiles: ["./jest-settings/setupJest.js"],
  testMatch: [
    "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/reportPortal.io/*.(spec|test).{js,jsx,ts,tsx}",
  ],
  rootDir: "../",
};
