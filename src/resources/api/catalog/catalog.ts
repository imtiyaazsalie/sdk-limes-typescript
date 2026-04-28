// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CategoryAPI from './category';
import { Category, CategoryGetTreeParams } from './category';
import * as ProductsAPI from './products';
import { ProductListByCategoryParams, Products } from './products';
import * as SearchAPI from './search';
import { Search, SearchListProductsParams } from './search';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Catalog extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  category: CategoryAPI.Category = new CategoryAPI.Category(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);

  listCategories(
    query: CatalogListCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/Catalog/categories', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CatalogListCategoriesParams {
  limit?: number;

  page?: number;
}

Catalog.Search = Search;
Catalog.Category = Category;
Catalog.Products = Products;

export declare namespace Catalog {
  export { type CatalogListCategoriesParams as CatalogListCategoriesParams };

  export { Search as Search, type SearchListProductsParams as SearchListProductsParams };

  export { Category as Category, type CategoryGetTreeParams as CategoryGetTreeParams };

  export { Products as Products, type ProductListByCategoryParams as ProductListByCategoryParams };
}
