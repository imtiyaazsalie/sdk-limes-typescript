// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Category extends APIResource {
  retrieve(categoryID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Catalog/category/${categoryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getTree(query: CategoryGetTreeParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Catalog/category/tree', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CategoryGetTreeParams {
  groupCode?: string;

  groupOnly?: boolean;
}

export declare namespace Category {
  export { type CategoryGetTreeParams as CategoryGetTreeParams };
}
