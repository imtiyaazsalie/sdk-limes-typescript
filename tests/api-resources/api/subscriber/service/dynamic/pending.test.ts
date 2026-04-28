// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pending', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.api.subscriber.service.dynamic.pending.create('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriber.service.dynamic.pending.create(
        'msisdn',
        {
          definitionCode: 'definitionCode',
          expiryDate: '2019-12-27',
          paymentReference: 'paymentReference',
          priceInCents: 0,
          value: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SDKLimes.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.subscriber.service.dynamic.pending.list('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('process', async () => {
    const responsePromise = client.api.subscriber.service.dynamic.pending.process('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
