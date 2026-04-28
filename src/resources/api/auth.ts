// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  createToken(
    body: AuthCreateTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/Auth/token', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthCreateTokenParams {
  email?: string | null;

  role?: string | null;

  secret?: string | null;

  tenant?: string | null;
}

export declare namespace Auth {
  export { type AuthCreateTokenParams as AuthCreateTokenParams };
}
