// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthCreateTokenParams } from './auth';
import * as UserAPI from './user';
import { User, UserRegisterParams, UserUpdateSimDescriptionParams } from './user';
import * as CatalogAPI from './catalog/catalog';
import { Catalog, CatalogListCategoriesParams } from './catalog/catalog';
import * as CRMAPI from './crm/crm';
import { CRM } from './crm/crm';
import * as MvnxAPI from './mvnx/mvnx';
import { Mvnx, MvnxCreatePortParams, MvnxCreateWebhookParams } from './mvnx/mvnx';
import * as OrderAPI from './order/order';
import { Order, OrderCreateParams } from './order/order';
import * as PaymentAPI from './payment/payment';
import { Payment, PaymentListTransactionsParams, PaymentRefundParams } from './payment/payment';
import * as ResourcesAPI from './resources/resources';
import { Resources } from './resources/resources';
import * as RicaAPI from './rica/rica';
import { Rica } from './rica/rica';
import * as SubscriberAPI from './subscriber/subscriber';
import {
  Subscriber,
  SubscriberCreateParams,
  SubscriberGetUserParams,
  SubscriberSearchParams,
} from './subscriber/subscriber';
import * as WarehouseAPI from './warehouse/warehouse';
import { Warehouse } from './warehouse/warehouse';

export class API extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
  crm: CRMAPI.CRM = new CRMAPI.CRM(this._client);
  mvnx: MvnxAPI.Mvnx = new MvnxAPI.Mvnx(this._client);
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  payment: PaymentAPI.Payment = new PaymentAPI.Payment(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
  rica: RicaAPI.Rica = new RicaAPI.Rica(this._client);
  subscriber: SubscriberAPI.Subscriber = new SubscriberAPI.Subscriber(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);
  warehouse: WarehouseAPI.Warehouse = new WarehouseAPI.Warehouse(this._client);
}

API.Auth = Auth;
API.Catalog = Catalog;
API.CRM = CRM;
API.Mvnx = Mvnx;
API.Order = Order;
API.Payment = Payment;
API.Resources = Resources;
API.Rica = Rica;
API.Subscriber = Subscriber;
API.User = User;
API.Warehouse = Warehouse;

export declare namespace API {
  export { Auth as Auth, type AuthCreateTokenParams as AuthCreateTokenParams };

  export { Catalog as Catalog, type CatalogListCategoriesParams as CatalogListCategoriesParams };

  export { CRM as CRM };

  export {
    Mvnx as Mvnx,
    type MvnxCreatePortParams as MvnxCreatePortParams,
    type MvnxCreateWebhookParams as MvnxCreateWebhookParams,
  };

  export { Order as Order, type OrderCreateParams as OrderCreateParams };

  export {
    Payment as Payment,
    type PaymentListTransactionsParams as PaymentListTransactionsParams,
    type PaymentRefundParams as PaymentRefundParams,
  };

  export { Resources as Resources };

  export { Rica as Rica };

  export {
    Subscriber as Subscriber,
    type SubscriberCreateParams as SubscriberCreateParams,
    type SubscriberGetUserParams as SubscriberGetUserParams,
    type SubscriberSearchParams as SubscriberSearchParams,
  };

  export {
    User as User,
    type UserRegisterParams as UserRegisterParams,
    type UserUpdateSimDescriptionParams as UserUpdateSimDescriptionParams,
  };

  export { Warehouse as Warehouse };
}
