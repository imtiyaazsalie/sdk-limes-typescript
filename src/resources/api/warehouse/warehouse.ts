// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TrackingAPI from './tracking/tracking';
import { Tracking } from './tracking/tracking';

export class Warehouse extends APIResource {
  tracking: TrackingAPI.Tracking = new TrackingAPI.Tracking(this._client);
}

Warehouse.Tracking = Tracking;

export declare namespace Warehouse {
  export { Tracking as Tracking };
}
