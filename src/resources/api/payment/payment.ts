// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ComboBundleAPI from './combo-bundle';
import { ComboBundle, ComboBundleRecurringParams } from './combo-bundle';
import * as DynamicServicesAPI from './dynamic-services';
import { DynamicServiceInitializeParams, DynamicServiceRecurringParams, DynamicServiceRequest, DynamicServices } from './dynamic-services';
import * as PaystackAPI from './paystack/paystack';
import { Paystack, PaystackCancelSubscriptionParams, PaystackChargeParams, PaystackInitializeComboParams, PaystackInitializeParams, PaystackLinkTransactionParams, PaystackLinkTransactionToServicesParams, PaystackSubscribeParams, PaystackVerifyParams } from './paystack/paystack';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Payment extends APIResource {
  paystack: PaystackAPI.Paystack = new PaystackAPI.Paystack(this._client);
  dynamicServices: DynamicServicesAPI.DynamicServices = new DynamicServicesAPI.DynamicServices(this._client);
  comboBundle: ComboBundleAPI.ComboBundle = new ComboBundleAPI.ComboBundle(this._client);

  listTransactions(query: PaymentListTransactionsParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Payment/transactions', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  refund(body: PaymentRefundParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/refund', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface PaymentListTransactionsParams {
  limit?: number;
}

export interface PaymentRefundParams {
  reason: string;

  transactionReference: string;

  amountInCents?: number | null;
}

Payment.Paystack = Paystack;
Payment.DynamicServices = DynamicServices;
Payment.ComboBundle = ComboBundle;

export declare namespace Payment {
  export {
    type PaymentListTransactionsParams as PaymentListTransactionsParams,
    type PaymentRefundParams as PaymentRefundParams
  };

  export {
    Paystack as Paystack,
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
    DynamicServices as DynamicServices,
    type DynamicServiceRequest as DynamicServiceRequest,
    type DynamicServiceInitializeParams as DynamicServiceInitializeParams,
    type DynamicServiceRecurringParams as DynamicServiceRecurringParams
  };

  export {
    ComboBundle as ComboBundle,
    type ComboBundleRecurringParams as ComboBundleRecurringParams
  };
}
