// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';

export class Upload extends APIResource {
  uploadID(body: UploadUploadIDParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/Rica/upload/id',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  uploadPoa(body: UploadUploadPoaParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/Rica/upload/poa',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface UploadUploadIDParams {
  file?: Uploadable;
}

export interface UploadUploadPoaParams {
  file?: Uploadable;
}

export declare namespace Upload {
  export {
    type UploadUploadIDParams as UploadUploadIDParams,
    type UploadUploadPoaParams as UploadUploadPoaParams,
  };
}
