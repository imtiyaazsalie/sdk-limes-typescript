// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InventoryAPI from './inventory/inventory';
import { Inventory } from './inventory/inventory';

export class Resources extends APIResource {
  inventory: InventoryAPI.Inventory = new InventoryAPI.Inventory(this._client);
}

Resources.Inventory = Inventory;

export declare namespace Resources {
  export { Inventory as Inventory };
}
