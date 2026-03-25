// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SimAPI from './sim';
import { Sim, SimSearchParams } from './sim';

export class Inventory extends APIResource {
  sim: SimAPI.Sim = new SimAPI.Sim(this._client);
}

Inventory.Sim = Sim;

export declare namespace Inventory {
  export { Sim as Sim, type SimSearchParams as SimSearchParams };
}
