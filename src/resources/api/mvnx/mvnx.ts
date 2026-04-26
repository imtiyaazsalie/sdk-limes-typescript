// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History } from './history';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Mvnx extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  createPort(body: MvnxCreatePortParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Mvnx/port', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  createWebhook(body: MvnxCreateWebhookParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Mvnx/webhook', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface MvnxCreatePortParams {
  newMsisdn: string;

  oldMsisdn: string;

  portedAt?: string | null;

  reference?: string | null;
}

export interface MvnxCreateWebhookParams {
  id?: string | null;

  data?: MvnxCreateWebhookParams.Data;

  receivedOn?: string | null;

  sentOn?: string | null;

  type?: string | null;
}

export namespace MvnxCreateWebhookParams {
  export interface Data {
    iccid?: string | null;

    message?: string | null;

    msisdn?: string | null;

    ocsid?: string | null;

    portId?: string | null;

    portMsisdn?: string | null;

    status?: string | null;

    statusName?: string | null;

    subscriberId?: string | null;
  }
}

Mvnx.History = History;

export declare namespace Mvnx {
  export {
    type MvnxCreatePortParams as MvnxCreatePortParams,
    type MvnxCreateWebhookParams as MvnxCreateWebhookParams
  };

  export {
    History as History
  };
}
