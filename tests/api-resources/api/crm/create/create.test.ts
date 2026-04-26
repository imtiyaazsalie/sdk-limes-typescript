// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource create', () => {
  // Mock server tests are disabled
  test.skip('createContact', async () => {
    const responsePromise = client.api.crm.create.createContact();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createContact: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.crm.create.createContact({
    address: [{
    addressType: 'POSTAL',
    buildingName: 'buildingName',
    buildingNo: 'buildingNo',
    city: 'city',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    oneLineAddress: 'oneLineAddress',
    postCode: 'postCode',
    referredType: 'referredType',
    stateOrProvince: 'stateOrProvince',
    streetName: 'streetName',
    streetNo: 'streetNo',
    suburb: 'suburb',
  }],
    detail: {
    additionalInfo: ['string'],
    birthDate: '2019-12-27T18:11:19.117Z',
    firstname: 'firstname',
    gdprConsent: true,
    gender: 'F',
    idNumber: 'idNumber',
    lastname: 'lastname',
    middlename: 'middlename',
    organization: {
    department: 'department',
    name: 'name',
    office: 'office',
    position: 'position',
  },
    password: 'password',
    title: 'title',
  },
    email: [{
    displayOrder: 0,
    emailAddress: 'emailAddress',
    referredType: 'referredType',
  }],
    externalReference: 'externalReference',
    name: 'name',
    personType: 'personType',
    phone: [{
    contactType: 'MOBILE_NO',
    displayOrder: 0,
    phoneNumber: 'phoneNumber',
    referredType: 'referredType',
  }],
    propertyOption: [{
    id: 'id',
    defaultOption: 'defaultOption',
    name: 'name',
    option: [{ id: 'id', name: 'name' }],
  }],
    referredType: 'referredType',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(SDKLimes.NotFoundError);
  });
});
