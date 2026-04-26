// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountAPI from './store/account';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Update extends APIResource {
  updateCustomer(body: UpdateUpdateCustomerParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/api/Crm/update/customer', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface AccountCustomer {
  address?: Array<AccountAPI.AccountAddress> | null;

  detail?: AccountCustomer.Detail;

  isResidential?: boolean;
}

export namespace AccountCustomer {
  export interface Detail {
    firstname?: string | null;

    lastname?: string | null;

    requireSecurityQuestions?: boolean;
  }
}

export interface UpdateUpdateCustomerParams {
  address?: Array<AccountAPI.AccountAddress> | null;

  detail?: UpdateUpdateCustomerParams.Detail;

  isResidential?: boolean;
}

export namespace UpdateUpdateCustomerParams {
  export interface Detail {
    firstname?: string | null;

    lastname?: string | null;

    requireSecurityQuestions?: boolean;
  }
}

export declare namespace Update {
  export {
    type AccountCustomer as AccountCustomer,
    type UpdateUpdateCustomerParams as UpdateUpdateCustomerParams
  };
}
