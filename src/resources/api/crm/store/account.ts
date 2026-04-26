// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountAPI from './account';
import * as UpdateAPI from '../update';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class AccountResource extends APIResource {
  createCustomer(body: AccountCreateCustomerParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Crm/store/account/customer', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface Account {
  address?: Array<AccountAddress> | null;

  collectionPlan?: Account.CollectionPlan;

  contact?: Account.Contact;

  customer?: UpdateAPI.AccountCustomer;

  detail?: Account.Detail;

  isResidential?: boolean;

  phone?: Account.Phone;

  taxScheme?: Account.TaxScheme;
}

export namespace Account {
  export interface CollectionPlan {
    id?: string | null;
  }

  export interface Contact {
    isAccountOwner?: boolean;

    isServiceOwner?: boolean;

    primaryContactRole?: string | null;

    useParentAddressType?: AccountAPI.AddressType;
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
    contactType?: AccountAPI.ContactType;

    phoneNumber?: string | null;
  }

  export interface TaxScheme {
    id?: string | null;
  }
}

export interface AccountAddress {
  addressType?: AddressType;

  city?: string | null;

  country?: string | null;

  postCode?: string | null;

  stateOrProvince?: string | null;

  streetName?: string | null;

  streetNo?: string | null;

  suburb?: string | null;
}

export type AddressType = 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'

export type ContactType = 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'

export interface AccountCreateCustomerParams {
  address?: Array<AccountAddress> | null;

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

    useParentAddressType?: AccountAPI.AddressType;
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
    contactType?: AccountAPI.ContactType;

    phoneNumber?: string | null;
  }

  export interface TaxScheme {
    id?: string | null;
  }
}

export declare namespace AccountResource {
  export {
    type Account as Account,
    type AccountAddress as AccountAddress,
    type AddressType as AddressType,
    type ContactType as ContactType,
    type AccountCreateCustomerParams as AccountCreateCustomerParams
  };
}
