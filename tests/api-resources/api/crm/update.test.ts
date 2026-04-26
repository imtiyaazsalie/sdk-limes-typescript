// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource update', () => {
  // Mock server tests are disabled
  test.skip('updateCustomer', async () => {
    const responsePromise = client.api.crm.update.updateCustomer();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateCustomer: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.crm.update.updateCustomer({
    address: [{
    addressType: 'POSTAL',
    city: 'city',
    country: 'country',
    postCode: 'postCode',
    stateOrProvince: 'stateOrProvince',
    streetName: 'streetName',
    streetNo: 'streetNo',
    suburb: 'suburb',
  }],
    detail: {
    firstname: 'firstname',
    lastname: 'lastname',
    requireSecurityQuestions: true,
  },
    isResidential: true,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(SDKLimes.NotFoundError);
  });
});
