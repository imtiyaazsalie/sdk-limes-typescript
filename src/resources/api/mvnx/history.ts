// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class History extends APIResource {
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Mvnx/history', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveByMsisdn(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Mvnx/history/${msisdn}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
