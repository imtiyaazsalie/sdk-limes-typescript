// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SwapAPI from './swap';
import { Swap, SwapMsisdnParams } from './swap';
import * as AccountAPI from '../crm/store/account';
import * as ServiceAPI from './service/service';
import { Service } from './service/service';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriber extends APIResource {
  service: ServiceAPI.Service = new ServiceAPI.Service(this._client);
  swap: SwapAPI.Swap = new SwapAPI.Swap(this._client);

  create(body: SubscriberCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/Subscriber/create', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Subscriber/${msisdn}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  activate(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/Subscriber/${msisdn}/activate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getBalance(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Subscriber/${msisdn}/balance`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getUser(
    query: SubscriberGetUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/Subscriber/user', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  isActive(msisdn: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/Subscriber/${msisdn}/is-active`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  search(query: SubscriberSearchParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/Subscriber/search', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriberCreateParams {
  accountId?: string | null;

  address?: Array<AccountAPI.AccountAddress> | null;

  eSim?: boolean | null;

  iccid?: string | null;

  productId?: string | null;

  relatedParty?: Array<SubscriberCreateParams.RelatedParty> | null;

  transactionId?: string | null;
}

export namespace SubscriberCreateParams {
  export interface RelatedParty {
    id?: string | null;

    address?: Array<RelatedParty.Address> | null;

    detail?: RelatedParty.Detail;

    email?: Array<RelatedParty.Email> | null;

    isAccountOwner?: boolean;

    isServiceOwner?: boolean;

    name?: string | null;

    personType?: string | null;

    phone?: Array<RelatedParty.Phone> | null;

    primaryContactRole?: string | null;

    referredType?: string | null;

    useParentAddressType?: string | null;
  }

  export namespace RelatedParty {
    export interface Address {
      addressType?: AccountAPI.AddressType;

      city?: string | null;

      country?: string | null;

      oneLineAddress?: string | null;

      postCode?: string | null;

      referredType?: string | null;

      stateOrProvince?: string | null;

      streetName?: string | null;

      streetNo?: string | null;

      suburb?: string | null;
    }

    export interface Detail {
      birthDate?: string;

      firstname?: string | null;

      gdprConsent?: boolean;

      gender?: string | null;

      idNumber?: string | null;

      lastname?: string | null;

      title?: string | null;
    }

    export interface Email {
      displayOrder?: number;

      emailAddress?: string | null;

      referredType?: string | null;
    }

    export interface Phone {
      contactType?: AccountAPI.ContactType;

      displayOrder?: number;

      phoneNumber?: string | null;

      referredType?: string | null;
    }
  }
}

export interface SubscriberGetUserParams {
  limit?: number;

  page?: number;
}

export interface SubscriberSearchParams {
  AccountId?: string;

  Active?: string;

  AddressId?: string;

  CatalogProductId?: string;

  CompleteOrder?: string;

  CustomerId?: string;

  Iccid?: string;

  Id?: string;

  IsVisible?: string;

  Limit?: number;

  Msisdn?: string;

  Ocsid?: string;

  OrderId?: string;

  OrderState?: string;

  Page?: number;

  ProductType?: string;

  ServiceType?: string;

  State?: string;

  Status?: string;

  Waybill?: string;
}

Subscriber.Service = Service;
Subscriber.Swap = Swap;

export declare namespace Subscriber {
  export {
    type SubscriberCreateParams as SubscriberCreateParams,
    type SubscriberGetUserParams as SubscriberGetUserParams,
    type SubscriberSearchParams as SubscriberSearchParams,
  };

  export { Service as Service };

  export { Swap as Swap, type SwapMsisdnParams as SwapMsisdnParams };
}
