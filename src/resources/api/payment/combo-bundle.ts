// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class ComboBundle extends APIResource {
  recurring(body: ComboBundleRecurringParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Payment/combo-bundle/recurring', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ComboBundleRecurringParams {
  amount: number;

  msisdn: string;

  paymentMethodId: string;

  productId: string;
}

export declare namespace ComboBundle {
  export { type ComboBundleRecurringParams as ComboBundleRecurringParams };
}
