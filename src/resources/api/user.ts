// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class User extends APIResource {
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/User', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  activate(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/User/activate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  hasAccount(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/User/has-account', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  register(body: UserRegisterParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/User/register', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateSimDescription(body: UserUpdateSimDescriptionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/api/User/sim-description', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserRegisterParams {
  emailAddress?: string | null;

  externalId?: string | null;

  firstName?: string | null;

  lastName?: string | null;

  tenant?: string | null;
}

export interface UserUpdateSimDescriptionParams {
  msisdn: string | null;

  simDescription?: string | null;
}

export declare namespace User {
  export {
    type UserRegisterParams as UserRegisterParams,
    type UserUpdateSimDescriptionParams as UserUpdateSimDescriptionParams,
  };
}
