// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomerAPI from './customer';
import { Customer } from './customer';

export class Account extends APIResource {
  customer: CustomerAPI.Customer = new CustomerAPI.Customer(this._client);
}

Account.Customer = Customer;

export declare namespace Account {
  export {
    Customer as Customer
  };
}
