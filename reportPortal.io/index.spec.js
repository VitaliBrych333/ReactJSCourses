const ClientRP = require('reportportal-client');

describe('index script', () => {
  test('require reportportal-client package', () => {
    const result = new ClientRP({
      debug: false,
      token: '4fd7c665-15c3-4ec4-9051-abdb3881278b',
      endpoint: 'https://beta.demo.reportportal.io/api/v1',
      launch: 'vitalibrych333_TEST_EXAMPLE',
      project: 'vitalibrych333_personal',
    });

    expect(result).toBeDefined();
    expect(result).not.toBe(null);
  });
});
