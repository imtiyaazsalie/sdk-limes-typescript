// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.api.auth.createToken',
    fullyQualifiedName: 'api.auth.createToken',
    httpMethod: 'post',
    httpPath: '/api/Auth/token',
  },
  {
    clientCallName: 'client.api.catalog.listCategories',
    fullyQualifiedName: 'api.catalog.listCategories',
    httpMethod: 'get',
    httpPath: '/api/Catalog/categories',
  },
  {
    clientCallName: 'client.api.catalog.search.listProducts',
    fullyQualifiedName: 'api.catalog.search.listProducts',
    httpMethod: 'get',
    httpPath: '/api/Catalog/search/products',
  },
  {
    clientCallName: 'client.api.catalog.search.retrieveProduct',
    fullyQualifiedName: 'api.catalog.search.retrieveProduct',
    httpMethod: 'get',
    httpPath: '/api/Catalog/search/product/{productId}',
  },
  {
    clientCallName: 'client.api.catalog.category.retrieve',
    fullyQualifiedName: 'api.catalog.category.retrieve',
    httpMethod: 'get',
    httpPath: '/api/Catalog/category/{categoryId}',
  },
  {
    clientCallName: 'client.api.catalog.category.getTree',
    fullyQualifiedName: 'api.catalog.category.getTree',
    httpMethod: 'get',
    httpPath: '/api/Catalog/category/tree',
  },
  {
    clientCallName: 'client.api.catalog.products.listByCategory',
    fullyQualifiedName: 'api.catalog.products.listByCategory',
    httpMethod: 'get',
    httpPath: '/api/Catalog/products/category/{categoryCode}',
  },
  {
    clientCallName: 'client.api.crm.search.listAccounts',
    fullyQualifiedName: 'api.crm.search.listAccounts',
    httpMethod: 'get',
    httpPath: '/api/Crm/search/accounts',
  },
  {
    clientCallName: 'client.api.crm.create.createContact',
    fullyQualifiedName: 'api.crm.create.createContact',
    httpMethod: 'post',
    httpPath: '/api/Crm/create/contact',
  },
  {
    clientCallName: 'client.api.crm.create.account.createCustomer',
    fullyQualifiedName: 'api.crm.create.account.createCustomer',
    httpMethod: 'post',
    httpPath: '/api/Crm/create/account/customer',
  },
  {
    clientCallName: 'client.api.crm.store.account.createCustomer',
    fullyQualifiedName: 'api.crm.store.account.createCustomer',
    httpMethod: 'post',
    httpPath: '/api/Crm/store/account/customer',
  },
  {
    clientCallName: 'client.api.crm.account.customer.retrieve',
    fullyQualifiedName: 'api.crm.account.customer.retrieve',
    httpMethod: 'get',
    httpPath: '/api/Crm/account/customer',
  },
  {
    clientCallName: 'client.api.crm.account.customer.getSection',
    fullyQualifiedName: 'api.crm.account.customer.getSection',
    httpMethod: 'get',
    httpPath: '/api/Crm/account/customer/section',
  },
  {
    clientCallName: 'client.api.crm.update.updateCustomer',
    fullyQualifiedName: 'api.crm.update.updateCustomer',
    httpMethod: 'patch',
    httpPath: '/api/Crm/update/customer',
  },
  {
    clientCallName: 'client.api.mvnx.createPort',
    fullyQualifiedName: 'api.mvnx.createPort',
    httpMethod: 'post',
    httpPath: '/api/Mvnx/port',
  },
  {
    clientCallName: 'client.api.mvnx.createWebhook',
    fullyQualifiedName: 'api.mvnx.createWebhook',
    httpMethod: 'post',
    httpPath: '/api/Mvnx/webhook',
  },
  {
    clientCallName: 'client.api.mvnx.history.list',
    fullyQualifiedName: 'api.mvnx.history.list',
    httpMethod: 'get',
    httpPath: '/api/Mvnx/history',
  },
  {
    clientCallName: 'client.api.mvnx.history.retrieveByMsisdn',
    fullyQualifiedName: 'api.mvnx.history.retrieveByMsisdn',
    httpMethod: 'get',
    httpPath: '/api/Mvnx/history/{msisdn}',
  },
  {
    clientCallName: 'client.api.order.create',
    fullyQualifiedName: 'api.order.create',
    httpMethod: 'post',
    httpPath: '/api/Order/create',
  },
  {
    clientCallName: 'client.api.order.pending.create',
    fullyQualifiedName: 'api.order.pending.create',
    httpMethod: 'post',
    httpPath: '/api/Order/pending',
  },
  {
    clientCallName: 'client.api.order.pending.process',
    fullyQualifiedName: 'api.order.pending.process',
    httpMethod: 'post',
    httpPath: '/api/Order/pending/{msisdn}/process',
  },
  {
    clientCallName: 'client.api.order.pending.retrieveByMsisdn',
    fullyQualifiedName: 'api.order.pending.retrieveByMsisdn',
    httpMethod: 'get',
    httpPath: '/api/Order/pending/{msisdn}',
  },
  {
    clientCallName: 'client.api.payment.listTransactions',
    fullyQualifiedName: 'api.payment.listTransactions',
    httpMethod: 'get',
    httpPath: '/api/Payment/transactions',
  },
  {
    clientCallName: 'client.api.payment.refund',
    fullyQualifiedName: 'api.payment.refund',
    httpMethod: 'post',
    httpPath: '/api/Payment/refund',
  },
  {
    clientCallName: 'client.api.payment.paystack.cancelSubscription',
    fullyQualifiedName: 'api.payment.paystack.cancelSubscription',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/cancel-subscription',
  },
  {
    clientCallName: 'client.api.payment.paystack.charge',
    fullyQualifiedName: 'api.payment.paystack.charge',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/charge',
  },
  {
    clientCallName: 'client.api.payment.paystack.initialize',
    fullyQualifiedName: 'api.payment.paystack.initialize',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/initialize',
  },
  {
    clientCallName: 'client.api.payment.paystack.initializeCombo',
    fullyQualifiedName: 'api.payment.paystack.initializeCombo',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/initialize-combo',
  },
  {
    clientCallName: 'client.api.payment.paystack.linkTransaction',
    fullyQualifiedName: 'api.payment.paystack.linkTransaction',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/link-transaction',
  },
  {
    clientCallName: 'client.api.payment.paystack.linkTransactionToServices',
    fullyQualifiedName: 'api.payment.paystack.linkTransactionToServices',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/link-transaction-to-services',
  },
  {
    clientCallName: 'client.api.payment.paystack.listSubscriptions',
    fullyQualifiedName: 'api.payment.paystack.listSubscriptions',
    httpMethod: 'get',
    httpPath: '/api/Payment/paystack/subscriptions',
  },
  {
    clientCallName: 'client.api.payment.paystack.retrieveSubscription',
    fullyQualifiedName: 'api.payment.paystack.retrieveSubscription',
    httpMethod: 'get',
    httpPath: '/api/Payment/paystack/subscription/{id}',
  },
  {
    clientCallName: 'client.api.payment.paystack.subscribe',
    fullyQualifiedName: 'api.payment.paystack.subscribe',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/subscribe',
  },
  {
    clientCallName: 'client.api.payment.paystack.verify',
    fullyQualifiedName: 'api.payment.paystack.verify',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/verify',
  },
  {
    clientCallName: 'client.api.payment.paystack.webhook',
    fullyQualifiedName: 'api.payment.paystack.webhook',
    httpMethod: 'post',
    httpPath: '/api/Payment/paystack/webhook',
  },
  {
    clientCallName: 'client.api.payment.paystack.cards.list',
    fullyQualifiedName: 'api.payment.paystack.cards.list',
    httpMethod: 'get',
    httpPath: '/api/Payment/paystack/cards',
  },
  {
    clientCallName: 'client.api.payment.paystack.cards.delete',
    fullyQualifiedName: 'api.payment.paystack.cards.delete',
    httpMethod: 'delete',
    httpPath: '/api/Payment/paystack/cards/{id}',
  },
  {
    clientCallName: 'client.api.payment.dynamicServices.initialize',
    fullyQualifiedName: 'api.payment.dynamicServices.initialize',
    httpMethod: 'post',
    httpPath: '/api/Payment/dynamic-services/initialize',
  },
  {
    clientCallName: 'client.api.payment.dynamicServices.recurring',
    fullyQualifiedName: 'api.payment.dynamicServices.recurring',
    httpMethod: 'post',
    httpPath: '/api/Payment/dynamic-services/recurring',
  },
  {
    clientCallName: 'client.api.payment.comboBundle.recurring',
    fullyQualifiedName: 'api.payment.comboBundle.recurring',
    httpMethod: 'post',
    httpPath: '/api/Payment/combo-bundle/recurring',
  },
  {
    clientCallName: 'client.api.resources.inventory.sim.search',
    fullyQualifiedName: 'api.resources.inventory.sim.search',
    httpMethod: 'get',
    httpPath: '/api/Resources/inventory/sim/search',
  },
  {
    clientCallName: 'client.api.rica.retrieveDocument',
    fullyQualifiedName: 'api.rica.retrieveDocument',
    httpMethod: 'get',
    httpPath: '/api/Rica/document/{type}',
  },
  {
    clientCallName: 'client.api.rica.upload.uploadID',
    fullyQualifiedName: 'api.rica.upload.uploadID',
    httpMethod: 'post',
    httpPath: '/api/Rica/upload/id',
  },
  {
    clientCallName: 'client.api.rica.upload.uploadPoa',
    fullyQualifiedName: 'api.rica.upload.uploadPoa',
    httpMethod: 'post',
    httpPath: '/api/Rica/upload/poa',
  },
  {
    clientCallName: 'client.api.subscriber.create',
    fullyQualifiedName: 'api.subscriber.create',
    httpMethod: 'post',
    httpPath: '/api/Subscriber/create',
  },
  {
    clientCallName: 'client.api.subscriber.retrieve',
    fullyQualifiedName: 'api.subscriber.retrieve',
    httpMethod: 'get',
    httpPath: '/api/Subscriber/{msisdn}',
  },
  {
    clientCallName: 'client.api.subscriber.activate',
    fullyQualifiedName: 'api.subscriber.activate',
    httpMethod: 'post',
    httpPath: '/api/Subscriber/{msisdn}/activate',
  },
  {
    clientCallName: 'client.api.subscriber.getBalance',
    fullyQualifiedName: 'api.subscriber.getBalance',
    httpMethod: 'get',
    httpPath: '/api/Subscriber/{msisdn}/balance',
  },
  {
    clientCallName: 'client.api.subscriber.getUser',
    fullyQualifiedName: 'api.subscriber.getUser',
    httpMethod: 'get',
    httpPath: '/api/Subscriber/user',
  },
  {
    clientCallName: 'client.api.subscriber.isActive',
    fullyQualifiedName: 'api.subscriber.isActive',
    httpMethod: 'get',
    httpPath: '/api/Subscriber/{msisdn}/is-active',
  },
  {
    clientCallName: 'client.api.subscriber.search',
    fullyQualifiedName: 'api.subscriber.search',
    httpMethod: 'get',
    httpPath: '/api/Subscriber/search',
  },
  {
    clientCallName: 'client.api.subscriber.service.dynamic.create',
    fullyQualifiedName: 'api.subscriber.service.dynamic.create',
    httpMethod: 'post',
    httpPath: '/api/Subscriber/{msisdn}/service/dynamic',
  },
  {
    clientCallName: 'client.api.subscriber.service.dynamic.pending.create',
    fullyQualifiedName: 'api.subscriber.service.dynamic.pending.create',
    httpMethod: 'post',
    httpPath: '/api/Subscriber/{msisdn}/service/dynamic/pending',
  },
  {
    clientCallName: 'client.api.subscriber.service.dynamic.pending.list',
    fullyQualifiedName: 'api.subscriber.service.dynamic.pending.list',
    httpMethod: 'get',
    httpPath: '/api/Subscriber/{msisdn}/service/dynamic/pending',
  },
  {
    clientCallName: 'client.api.subscriber.service.dynamic.pending.process',
    fullyQualifiedName: 'api.subscriber.service.dynamic.pending.process',
    httpMethod: 'post',
    httpPath: '/api/Subscriber/{msisdn}/service/dynamic/pending/process',
  },
  {
    clientCallName: 'client.api.subscriber.swap.msisdn',
    fullyQualifiedName: 'api.subscriber.swap.msisdn',
    httpMethod: 'post',
    httpPath: '/api/Subscriber/{msisdn}/swap/msisdn/{toMsisdn}',
  },
  {
    clientCallName: 'client.api.user.list',
    fullyQualifiedName: 'api.user.list',
    httpMethod: 'get',
    httpPath: '/api/User',
  },
  {
    clientCallName: 'client.api.user.activate',
    fullyQualifiedName: 'api.user.activate',
    httpMethod: 'get',
    httpPath: '/api/User/activate',
  },
  {
    clientCallName: 'client.api.user.hasAccount',
    fullyQualifiedName: 'api.user.hasAccount',
    httpMethod: 'get',
    httpPath: '/api/User/has-account',
  },
  {
    clientCallName: 'client.api.user.register',
    fullyQualifiedName: 'api.user.register',
    httpMethod: 'post',
    httpPath: '/api/User/register',
  },
  {
    clientCallName: 'client.api.user.updateSimDescription',
    fullyQualifiedName: 'api.user.updateSimDescription',
    httpMethod: 'patch',
    httpPath: '/api/User/sim-description',
  },
  {
    clientCallName: 'client.api.warehouse.tracking.getEvents',
    fullyQualifiedName: 'api.warehouse.tracking.getEvents',
    httpMethod: 'get',
    httpPath: '/api/Warehouse/tracking/{orderId}/events',
  },
  {
    clientCallName: 'client.api.warehouse.tracking.getPod',
    fullyQualifiedName: 'api.warehouse.tracking.getPod',
    httpMethod: 'get',
    httpPath: '/api/Warehouse/tracking/{orderId}/pod',
  },
  {
    clientCallName: 'client.api.warehouse.tracking.msisdn.getEvents',
    fullyQualifiedName: 'api.warehouse.tracking.msisdn.getEvents',
    httpMethod: 'get',
    httpPath: '/api/Warehouse/tracking/msisdn/{msisdn}/events',
  },
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.health.checkDB',
    fullyQualifiedName: 'health.checkDB',
    httpMethod: 'get',
    httpPath: '/health/db',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
