// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriber', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.api.subscriber.create();
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
      client.api.subscriber.create(
        {
          accountId: 'accountId',
          address: [
            {
              addressType: 'POSTAL',
              city: 'city',
              country: 'country',
              postCode: 'postCode',
              stateOrProvince: 'stateOrProvince',
              streetName: 'streetName',
              streetNo: 'streetNo',
              suburb: 'suburb',
            },
          ],
          eSim: true,
          iccid: 'iccid',
          productId: 'productId',
          relatedParty: [
            {
              id: 'id',
              address: [
                {
                  addressType: 'POSTAL',
                  city: 'city',
                  country: 'country',
                  oneLineAddress: 'oneLineAddress',
                  postCode: 'postCode',
                  referredType: 'referredType',
                  stateOrProvince: 'stateOrProvince',
                  streetName: 'streetName',
                  streetNo: 'streetNo',
                  suburb: 'suburb',
                },
              ],
              detail: {
                birthDate: '2019-12-27T18:11:19.117Z',
                firstname: 'firstname',
                gdprConsent: true,
                gender: 'gender',
                idNumber: 'idNumber',
                lastname: 'lastname',
                title: 'title',
              },
              email: [
                {
                  displayOrder: 0,
                  emailAddress: 'emailAddress',
                  referredType: 'referredType',
                },
              ],
              isAccountOwner: true,
              isServiceOwner: true,
              name: 'name',
              personType: 'personType',
              phone: [
                {
                  contactType: 'MOBILE_NO',
                  displayOrder: 0,
                  phoneNumber: 'phoneNumber',
                  referredType: 'referredType',
                },
              ],
              primaryContactRole: 'primaryContactRole',
              referredType: 'referredType',
              useParentAddressType: 'useParentAddressType',
            },
          ],
          transactionId: 'transactionId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SDKLimes.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.subscriber.retrieve('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('activate', async () => {
    const responsePromise = client.api.subscriber.activate('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getBalance', async () => {
    const responsePromise = client.api.subscriber.getBalance('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUser', async () => {
    const responsePromise = client.api.subscriber.getUser();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUser: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriber.getUser({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SDKLimes.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('isActive', async () => {
    const responsePromise = client.api.subscriber.isActive('msisdn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.api.subscriber.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriber.search(
        {
          AccountId: 'AccountId',
          Active: 'Active',
          AddressId: 'AddressId',
          CatalogProductId: 'CatalogProductId',
          CompleteOrder: 'CompleteOrder',
          CustomerId: 'CustomerId',
          Iccid: 'Iccid',
          Id: 'Id',
          IsVisible: 'IsVisible',
          Limit: 0,
          Msisdn: 'Msisdn',
          Ocsid: 'Ocsid',
          OrderId: 'OrderId',
          OrderState: 'OrderState',
          Page: 0,
          ProductType: 'ProductType',
          ServiceType: 'ServiceType',
          State: 'State',
          Status: 'Status',
          Waybill: 'Waybill',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SDKLimes.NotFoundError);
  });
});
