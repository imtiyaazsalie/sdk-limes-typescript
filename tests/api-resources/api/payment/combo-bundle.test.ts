// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comboBundle', () => {
  // Mock server tests are disabled
  test.skip('recurring: only required params', async () => {
    const responsePromise = client.api.payment.comboBundle.recurring({
      amount: 0,
      msisdn: 'x',
      paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      productId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('recurring: required and optional params', async () => {
    const response = await client.api.payment.comboBundle.recurring({
      amount: 0,
      msisdn: 'x',
      paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      productId: 'x',
    });
  });
});
