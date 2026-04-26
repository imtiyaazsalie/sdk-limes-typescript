// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountAPI from './account';
import { Account, AccountAddress, AccountCreateCustomerParams, AccountResource, AddressType, ContactType } from './account';

export class Store extends APIResource {
  account: AccountAPI.AccountResource = new AccountAPI.AccountResource(this._client);
}

Store.AccountResource = AccountResource;

export declare namespace Store {
  export {
    AccountResource as AccountResource,
    type Account as Account,
    type AccountAddress as AccountAddress,
    type AddressType as AddressType,
    type ContactType as ContactType,
    type AccountCreateCustomerParams as AccountCreateCustomerParams
  };
}
