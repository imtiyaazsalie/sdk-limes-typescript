// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DynamicAPI from './dynamic/dynamic';
import { Dynamic, DynamicCreateParams } from './dynamic/dynamic';

export class Service extends APIResource {
  dynamic: DynamicAPI.Dynamic = new DynamicAPI.Dynamic(this._client);
}

Service.Dynamic = Dynamic;

export declare namespace Service {
  export {
    Dynamic as Dynamic,
    type DynamicCreateParams as DynamicCreateParams
  };
}
