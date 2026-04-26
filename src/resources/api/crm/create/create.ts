// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountAPI from './account';
import { Account, AccountCreateCustomerParams } from './account';
import * as StoreAccountAPI from '../store/account';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Create extends APIResource {
  account: AccountAPI.Account = new AccountAPI.Account(this._client);

  createContact(body: CreateCreateContactParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Crm/create/contact', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface CreateCreateContactParams {
  address?: Array<CreateCreateContactParams.Address> | null;

  detail?: CreateCreateContactParams.Detail;

  email?: Array<CreateCreateContactParams.Email> | null;

  externalReference?: string | null;

  name?: string | null;

  personType?: string | null;

  phone?: Array<CreateCreateContactParams.Phone> | null;

  propertyOption?: Array<CreateCreateContactParams.PropertyOption> | null;

  referredType?: string | null;
}

export namespace CreateCreateContactParams {
  export interface Address {
    addressType?: StoreAccountAPI.AddressType;

    buildingName?: string | null;

    buildingNo?: string | null;

    city?: string | null;

    country?: string | null;

    latitude?: string | null;

    longitude?: string | null;

    oneLineAddress?: string | null;

    postCode?: string | null;

    referredType?: string | null;

    stateOrProvince?: string | null;

    streetName?: string | null;

    streetNo?: string | null;

    suburb?: string | null;
  }

  export interface Detail {
    additionalInfo?: Array<string> | null;

    birthDate?: string;

    firstname?: string | null;

    gdprConsent?: boolean;

    gender?: 'F' | 'M' | 'X';

    idNumber?: string | null;

    lastname?: string | null;

    middlename?: string | null;

    organization?: Detail.Organization;

    password?: string | null;

    title?: string | null;
  }

  export namespace Detail {
    export interface Organization {
      department?: string | null;

      name?: string | null;

      office?: string | null;

      position?: string | null;
    }
  }

  export interface Email {
    displayOrder?: number;

    emailAddress?: string | null;

    referredType?: string | null;
  }

  export interface Phone {
    contactType?: StoreAccountAPI.ContactType;

    displayOrder?: number;

    phoneNumber?: string | null;

    referredType?: string | null;
  }

  export interface PropertyOption {
    id?: string | null;

    defaultOption?: string | null;

    name?: string | null;

    option?: Array<PropertyOption.Option> | null;
  }

  export namespace PropertyOption {
    export interface Option {
      id?: string | null;

      name?: string | null;
    }
  }
}

Create.Account = Account;

export declare namespace Create {
  export {
    type CreateCreateContactParams as CreateCreateContactParams
  };

  export {
    Account as Account,
    type AccountCreateCustomerParams as AccountCreateCustomerParams
  };
}
