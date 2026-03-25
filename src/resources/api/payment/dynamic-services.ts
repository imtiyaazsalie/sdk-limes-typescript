// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class DynamicServices extends APIResource {
  initialize(body: DynamicServiceInitializeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/dynamic-services/initialize', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  recurring(body: DynamicServiceRecurringParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/dynamic-services/recurring', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DynamicServiceRequest {
  definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT';

  expiryDate?: string | null;

  priceInCents?: number;

  transactionId?: string | null;

  value?: number;
}

export interface DynamicServiceInitializeParams {
  services: Array<DynamicServiceRequest>;

  msisdn?: string | null;

  shippingCostInCents?: number | null;
}

export interface DynamicServiceRecurringParams {
  msisdn: string;

  paymentMethodId: string;

  services: Array<DynamicServiceRequest>;
}

export declare namespace DynamicServices {
  export {
    type DynamicServiceRequest as DynamicServiceRequest,
    type DynamicServiceInitializeParams as DynamicServiceInitializeParams,
    type DynamicServiceRecurringParams as DynamicServiceRecurringParams,
  };
}
