// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Swap extends APIResource {
  msisdn(toMsisdn: string, params: SwapMsisdnParams, options?: RequestOptions): APIPromise<void> {
    const { msisdn, port } = params;
    return this._client.post(path`/api/Subscriber/${msisdn}/swap/msisdn/${toMsisdn}`, {
      query: { port },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SwapMsisdnParams {
  /**
   * Path param
   */
  msisdn: string;

  /**
   * Query param
   */
  port?: boolean;
}

export declare namespace Swap {
  export { type SwapMsisdnParams as SwapMsisdnParams };
}
