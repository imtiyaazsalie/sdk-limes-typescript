// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('listAccounts', async () => {
    const responsePromise = client.api.crm.search.listAccounts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAccounts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.crm.search.listAccounts({
    BCycle: 'BCycle',
    Category: 'Category',
    Class: 'Class',
    FName: 'FName',
    Id: 'Id',
    IdNum: 'IdNum',
    IdType: 'IdType',
    Limit: 0,
    LName: 'LName',
    Name: 'Name',
    Page: 0,
    RelId: 'RelId',
    State: 'State',
    Type: 'Type',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(SDKLimes.NotFoundError);
  });
});
