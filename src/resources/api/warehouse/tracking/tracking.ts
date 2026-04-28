// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MsisdnAPI from './msisdn';
import { Msisdn } from './msisdn';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tracking extends APIResource {
  msisdn: MsisdnAPI.Msisdn = new MsisdnAPI.Msisdn(this._client);

  getEvents(orderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Warehouse/tracking/${orderID}/events`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getPod(orderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Warehouse/tracking/${orderID}/pod`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Tracking.Msisdn = Msisdn;

export declare namespace Tracking {
  export { Msisdn as Msisdn };
}
