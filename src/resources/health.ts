// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  check(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/health', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  checkDB(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/health/db', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
