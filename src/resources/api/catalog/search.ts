// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Search extends APIResource {
  listProducts(query: SearchListProductsParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Catalog/search/products', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieveProduct(productID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Catalog/search/product/${productID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface SearchListProductsParams {
  id?: string;

  adhoc?: string;

  limit?: number;

  page?: number;
}

export declare namespace Search {
  export {
    type SearchListProductsParams as SearchListProductsParams
  };
}
