// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SDKLimes } from '../client';

export abstract class APIResource {
  protected _client: SDKLimes;

  constructor(client: SDKLimes) {
    this._client = client;
  }
}
