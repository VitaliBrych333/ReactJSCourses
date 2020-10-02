module.exports = {
  reporters: [
    "default",
    [
      "./reportPortal.io/index.js",
      {
        token: "4fd7c665-15c3-4ec4-9051-abdb3881278b",
        endpoint: "https://beta.demo.reportportal.io/api/v1",
        launch: "vitalibrych333_TEST_EXAMPLE",
        project: "vitalibrych333_personal",
        description: "YOUR_DESCRIPTION",
        attributes: [
          {
            key: "YourKey",
            value: "YourValue",
          },
          {
            value: "YourValue",
          },
        ],
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
