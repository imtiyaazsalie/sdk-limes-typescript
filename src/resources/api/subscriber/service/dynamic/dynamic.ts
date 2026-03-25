// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DynamicServicesAPI from '../../../payment/dynamic-services';
import * as PendingAPI from './pending';
import { Pending, PendingCreateParams } from './pending';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Dynamic extends APIResource {
  pending: PendingAPI.Pending = new PendingAPI.Pending(this._client);

  create(
    msisdn: string,
    body: DynamicCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/Subscriber/${msisdn}/service/dynamic`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DynamicCreateParams {
  services?: Array<DynamicServicesAPI.DynamicServiceRequest> | null;
}

Dynamic.Pending = Pending;

export declare namespace Dynamic {
  export { type DynamicCreateParams as DynamicCreateParams };

  export { Pending as Pending, type PendingCreateParams as PendingCreateParams };
}
