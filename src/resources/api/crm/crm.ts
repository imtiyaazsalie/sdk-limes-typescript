// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SearchAPI from './search';
import { Search, SearchListAccountsParams } from './search';
import * as UpdateAPI from './update';
import { AccountCustomer, Update, UpdateUpdateCustomerParams } from './update';
import * as AccountAPI from './account/account';
import { Account } from './account/account';
import * as CreateAPI from './create/create';
import { Create, CreateCreateContactParams } from './create/create';
import * as StoreAPI from './store/store';
import { Store } from './store/store';

export class CRM extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  create: CreateAPI.Create = new CreateAPI.Create(this._client);
  store: StoreAPI.Store = new StoreAPI.Store(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  update: UpdateAPI.Update = new UpdateAPI.Update(this._client);
}

CRM.Search = Search;
CRM.Create = Create;
CRM.Store = Store;
CRM.Account = Account;
CRM.Update = Update;

export declare namespace CRM {
  export {
    Search as Search,
    type SearchListAccountsParams as SearchListAccountsParams
  };

  export {
    Create as Create,
    type CreateCreateContactParams as CreateCreateContactParams
  };

  export {
    Store as Store
  };

  export {
    Account as Account
  };

  export {
    Update as Update,
    type AccountCustomer as AccountCustomer,
    type UpdateUpdateCustomerParams as UpdateUpdateCustomerParams
  };
}
