// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Search extends APIResource {
  listAccounts(
    query: SearchListAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/Crm/search/accounts', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SearchListAccountsParams {
  BCycle?: string;

  Category?: string;

  Class?: string;

  FName?: string;

  Id?: string;

  IdNum?: string;

  IdType?: string;

  Limit?: number;

  LName?: string;

  Name?: string;

  Page?: number;

  RelId?: string;

  State?: string;

  Type?: string;
}

export declare namespace Search {
  export { type SearchListAccountsParams as SearchListAccountsParams };
}
