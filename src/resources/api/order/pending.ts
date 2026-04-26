// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pending extends APIResource {
  create(body: PendingCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Order/pending', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  process(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/Order/pending/${msisdn}/process`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieveByMsisdn(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Order/pending/${msisdn}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface PendingCreateParams {
  msisdn?: string | null;

  paymentReference?: string | null;

  productAmount?: number | null;

  productId?: string | null;
}

export declare namespace Pending {
  export {
    type PendingCreateParams as PendingCreateParams
  };
}
