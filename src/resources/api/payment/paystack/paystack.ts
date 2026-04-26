// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CardsAPI from './cards';
import { Cards } from './cards';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Paystack extends APIResource {
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);

  cancelSubscription(body: PaystackCancelSubscriptionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/cancel-subscription', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  charge(body: PaystackChargeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/charge', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  initialize(body: PaystackInitializeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/initialize', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * @deprecated
   */
  initializeCombo(body: PaystackInitializeComboParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/initialize-combo', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  linkTransaction(body: PaystackLinkTransactionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/link-transaction', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  linkTransactionToServices(body: PaystackLinkTransactionToServicesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/link-transaction-to-services', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  listSubscriptions(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Payment/paystack/subscriptions', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieveSubscription(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Payment/paystack/subscription/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * @deprecated
   */
  subscribe(body: PaystackSubscribeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/subscribe', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  verify(body: PaystackVerifyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/verify', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/paystack/webhook', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface PaystackCancelSubscriptionParams {
  msisdn: string;

  productId: string;
}

export interface PaystackChargeParams {
  amount: number;

  paymentMethodId: string;
}

export interface PaystackInitializeParams {
  amount: number;

  productId: string;

  msisdn?: string | null;
}

export interface PaystackInitializeComboParams {
  amount: number;

  productId: string;

  msisdn?: string | null;
}

export interface PaystackLinkTransactionParams {
  orderId: string;

  transactionReference: string;
}

export interface PaystackLinkTransactionToServicesParams {
  serviceIds: Array<string>;

  transactionReference: string;
}

export interface PaystackSubscribeParams {
  msisdn: string;

  paymentMethodId: string;

  productId: string;
}

export interface PaystackVerifyParams {
  reference: string;

  metadata?: PaystackVerifyParams.Metadata;

  saveCard?: boolean;
}

export namespace PaystackVerifyParams {
  export interface Metadata {
    customerName?: string | null;

    customerPhone?: string | null;

    msisdn?: string | null;

    productId?: string | null;

    productName?: string | null;

    shippingAddress?: string | null;
  }
}

Paystack.Cards = Cards;

export declare namespace Paystack {
  export {
    type PaystackCancelSubscriptionParams as PaystackCancelSubscriptionParams,
    type PaystackChargeParams as PaystackChargeParams,
    type PaystackInitializeParams as PaystackInitializeParams,
    type PaystackInitializeComboParams as PaystackInitializeComboParams,
    type PaystackLinkTransactionParams as PaystackLinkTransactionParams,
    type PaystackLinkTransactionToServicesParams as PaystackLinkTransactionToServicesParams,
    type PaystackSubscribeParams as PaystackSubscribeParams,
    type PaystackVerifyParams as PaystackVerifyParams
  };

  export {
    Cards as Cards
  };
}
