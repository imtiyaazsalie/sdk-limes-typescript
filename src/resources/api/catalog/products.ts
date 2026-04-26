// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Products extends APIResource {
  listByCategory(categoryCode: string, query: ProductListByCategoryParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Catalog/products/category/${categoryCode}`, { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ProductListByCategoryParams {
  descendants?: boolean;

  limit?: number;

  page?: number;
}

export declare namespace Products {
  export {
    type ProductListByCategoryParams as ProductListByCategoryParams
  };
}
