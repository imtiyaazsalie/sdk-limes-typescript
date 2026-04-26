// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Customer extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Crm/account/customer', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getSection(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Crm/account/customer/section', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
