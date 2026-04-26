// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource payment', () => {
  // Mock server tests are disabled
  test.skip('listTransactions', async () => {
    const responsePromise = client.api.payment.listTransactions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.payment.listTransactions({ limit: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(SDKLimes.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('refund: only required params', async () => {
    const responsePromise = client.api.payment.refund({ reason: 'x', transactionReference: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('refund: required and optional params', async () => {
    const response = await client.api.payment.refund({
    reason: 'x',
    transactionReference: 'x',
    amountInCents: 0,
  });
  });
});
