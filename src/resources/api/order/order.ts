// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PendingAPI from './pending';
import { Pending, PendingCreateParams } from './pending';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Order extends APIResource {
  pending: PendingAPI.Pending = new PendingAPI.Pending(this._client);

  create(body: OrderCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Order/create', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrderCreateParams {
  msisdn?: string | null;

  products?: Array<OrderCreateParams.Product> | null;
}

export namespace OrderCreateParams {
  export interface Product {
    id?: string | null;

    amount?: number | null;
  }
}

Order.Pending = Pending;

export declare namespace Order {
  export { type OrderCreateParams as OrderCreateParams };

  export { Pending as Pending, type PendingCreateParams as PendingCreateParams };
}
