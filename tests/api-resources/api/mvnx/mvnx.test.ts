// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mvnx', () => {
  // Mock server tests are disabled
  test.skip('createPort: only required params', async () => {
    const responsePromise = client.api.mvnx.createPort({ newMsisdn: 'x', oldMsisdn: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createPort: required and optional params', async () => {
    const response = await client.api.mvnx.createPort({
      newMsisdn: 'x',
      oldMsisdn: 'x',
      portedAt: '2019-12-27T18:11:19.117Z',
      reference: 'reference',
    });
  });

  // Mock server tests are disabled
  test.skip('createWebhook', async () => {
    const responsePromise = client.api.mvnx.createWebhook();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createWebhook: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.mvnx.createWebhook(
        {
          id: 'id',
          data: {
            iccid: 'iccid',
            message: 'message',
            msisdn: 'msisdn',
            ocsid: 'ocsid',
            portId: 'portId',
            portMsisdn: 'portMsisdn',
            status: 'status',
            statusName: 'statusName',
            subscriberId: 'subscriberId',
          },
          receivedOn: '2019-12-27T18:11:19.117Z',
          sentOn: '2019-12-27T18:11:19.117Z',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SDKLimes.NotFoundError);
  });
});
