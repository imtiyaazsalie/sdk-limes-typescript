// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Sim extends APIResource {
  search(query: SimSearchParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Resources/inventory/sim/search', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface SimSearchParams {
  id?: string;

  accessNo?: string;

  dealer?: string;

  imsi?: string;

  limit?: number;

  page?: number;

  status?: string;

  subStatus?: string;
}

export declare namespace Sim {
  export {
    type SimSearchParams as SimSearchParams
  };
}
