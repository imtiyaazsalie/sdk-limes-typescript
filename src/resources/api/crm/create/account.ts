// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UpdateAPI from '../update';
import * as StoreAccountAPI from '../store/account';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Account extends APIResource {
  createCustomer(body: AccountCreateCustomerParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Crm/create/account/customer', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface AccountCreateCustomerParams {
  address?: Array<StoreAccountAPI.AccountAddress> | null;

  collectionPlan?: AccountCreateCustomerParams.CollectionPlan;

  contact?: AccountCreateCustomerParams.Contact;

  customer?: UpdateAPI.AccountCustomer;

  detail?: AccountCreateCustomerParams.Detail;

  isResidential?: boolean;

  phone?: AccountCreateCustomerParams.Phone;

  taxScheme?: AccountCreateCustomerParams.TaxScheme;
}

export namespace AccountCreateCustomerParams {
  export interface CollectionPlan {
    id?: string | null;
  }

  export interface Contact {
    isAccountOwner?: boolean;

    isServiceOwner?: boolean;

    primaryContactRole?: string | null;

    useParentAddressType?: StoreAccountAPI.AddressType;
  }

  export interface Detail {
    billMedia?: Detail.BillMedia;

    creditLimit?: number;

    firstname?: string | null;

    hasDeposit?: boolean;

    identification?: Detail.Identification;

    lastname?: string | null;

    title?: string | null;
  }

  export namespace Detail {
    export interface BillMedia {
      emailAddress?: string | null;

      generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER';

      language?: string | null;

      mediaType?: 'SMS' | 'EMAIL';
    }

    export interface Identification {
      idNumber?: string | null;

      idType?: 'ID' | 'PASSPORT';
    }
  }

  export interface Phone {
    contactType?: StoreAccountAPI.ContactType;

    phoneNumber?: string | null;
  }

  export interface TaxScheme {
    id?: string | null;
  }
}

export declare namespace Account {
  export {
    type AccountCreateCustomerParams as AccountCreateCustomerParams
  };
}
