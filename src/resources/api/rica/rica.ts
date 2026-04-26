// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UploadAPI from './upload';
import { Upload, UploadUploadIDParams, UploadUploadPoaParams } from './upload';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rica extends APIResource {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);

  retrieveDocument(type: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Rica/document/${type}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Rica.Upload = Upload;

export declare namespace Rica {
  export {
    Upload as Upload,
    type UploadUploadIDParams as UploadUploadIDParams,
    type UploadUploadPoaParams as UploadUploadPoaParams
  };
}
