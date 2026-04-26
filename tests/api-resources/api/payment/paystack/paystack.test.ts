// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SDKLimes from 'sdk-limes';

const client = new SDKLimes({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource paystack', () => {
  // Mock server tests are disabled
  test.skip('cancelSubscription: only required params', async () => {
    const responsePromise = client.api.payment.paystack.cancelSubscription({ msisdn: 'x', productId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancelSubscription: required and optional params', async () => {
    const response = await client.api.payment.paystack.cancelSubscription({ msisdn: 'x', productId: 'x' });
  });

  // Mock server tests are disabled
  test.skip('charge: only required params', async () => {
    const responsePromise = client.api.payment.paystack.charge({ amount: 1, paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('charge: required and optional params', async () => {
    const response = await client.api.payment.paystack.charge({ amount: 1, paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // Mock server tests are disabled
  test.skip('initialize: only required params', async () => {
    const responsePromise = client.api.payment.paystack.initialize({ amount: 1, productId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initialize: required and optional params', async () => {
    const response = await client.api.payment.paystack.initialize({
    amount: 1,
    productId: 'x',
    msisdn: 'msisdn',
  });
  });

  // Mock server tests are disabled
  test.skip('initializeCombo: only required params', async () => {
    const responsePromise = client.api.payment.paystack.initializeCombo({ amount: 1, productId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initializeCombo: required and optional params', async () => {
    const response = await client.api.payment.paystack.initializeCombo({
    amount: 1,
    productId: 'x',
    msisdn: 'msisdn',
  });
  });

  // Mock server tests are disabled
  test.skip('linkTransaction: only required params', async () => {
    const responsePromise = client.api.payment.paystack.linkTransaction({ orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', transactionReference: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('linkTransaction: required and optional params', async () => {
    const response = await client.api.payment.paystack.linkTransaction({ orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', transactionReference: 'x' });
  });

  // Mock server tests are disabled
  test.skip('linkTransactionToServices: only required params', async () => {
    const responsePromise = client.api.payment.paystack.linkTransactionToServices({ serviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], transactionReference: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('linkTransactionToServices: required and optional params', async () => {
    const response = await client.api.payment.paystack.linkTransactionToServices({ serviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], transactionReference: 'x' });
  });

  // Mock server tests are disabled
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.api.payment.paystack.listSubscriptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveSubscription', async () => {
    const responsePromise = client.api.payment.paystack.retrieveSubscription('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.api.payment.paystack.subscribe({
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
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.api.payment.paystack.subscribe({
    msisdn: 'x',
    paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    productId: 'x',
  });
  });

  // Mock server tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.api.payment.paystack.verify({ reference: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.api.payment.paystack.verify({
    reference: 'x',
    metadata: {
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    msisdn: 'msisdn',
    productId: 'productId',
    productName: 'productName',
    shippingAddress: 'shippingAddress',
  },
    saveCard: true,
  });
  });

  // Mock server tests are disabled
  test.skip('webhook', async () => {
    const responsePromise = client.api.payment.paystack.webhook();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
