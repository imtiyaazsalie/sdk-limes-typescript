# API

## Auth

Methods:

- <code title="post /api/Auth/token">client.api.auth.<a href="./src/resources/api/auth.ts">createToken</a>({ ...params }) -> void</code>

## Catalog

Methods:

- <code title="get /api/Catalog/categories">client.api.catalog.<a href="./src/resources/api/catalog/catalog.ts">listCategories</a>({ ...params }) -> void</code>

### Search

Methods:

- <code title="get /api/Catalog/search/products">client.api.catalog.search.<a href="./src/resources/api/catalog/search.ts">listProducts</a>({ ...params }) -> void</code>
- <code title="get /api/Catalog/search/product/{productId}">client.api.catalog.search.<a href="./src/resources/api/catalog/search.ts">retrieveProduct</a>(productID) -> void</code>

### Category

Methods:

- <code title="get /api/Catalog/category/{categoryId}">client.api.catalog.category.<a href="./src/resources/api/catalog/category.ts">retrieve</a>(categoryID) -> void</code>
- <code title="get /api/Catalog/category/tree">client.api.catalog.category.<a href="./src/resources/api/catalog/category.ts">getTree</a>({ ...params }) -> void</code>

### Products

Methods:

- <code title="get /api/Catalog/products/category/{categoryCode}">client.api.catalog.products.<a href="./src/resources/api/catalog/products.ts">listByCategory</a>(categoryCode, { ...params }) -> void</code>

## CRM

### Search

Methods:

- <code title="get /api/Crm/search/accounts">client.api.crm.search.<a href="./src/resources/api/crm/search.ts">listAccounts</a>({ ...params }) -> void</code>

### Create

Methods:

- <code title="post /api/Crm/create/contact">client.api.crm.create.<a href="./src/resources/api/crm/create/create.ts">createContact</a>({ ...params }) -> void</code>

#### Account

Methods:

- <code title="post /api/Crm/create/account/customer">client.api.crm.create.account.<a href="./src/resources/api/crm/create/account.ts">createCustomer</a>({ ...params }) -> void</code>

### Store

#### Account

Types:

- <code><a href="./src/resources/api/crm/store/account.ts">Account</a></code>
- <code><a href="./src/resources/api/crm/store/account.ts">AccountAddress</a></code>
- <code><a href="./src/resources/api/crm/store/account.ts">AddressType</a></code>
- <code><a href="./src/resources/api/crm/store/account.ts">ContactType</a></code>

Methods:

- <code title="post /api/Crm/store/account/customer">client.api.crm.store.account.<a href="./src/resources/api/crm/store/account.ts">createCustomer</a>({ ...params }) -> void</code>

### Account

#### Customer

Methods:

- <code title="get /api/Crm/account/customer">client.api.crm.account.customer.<a href="./src/resources/api/crm/account/customer.ts">retrieve</a>() -> void</code>
- <code title="get /api/Crm/account/customer/section">client.api.crm.account.customer.<a href="./src/resources/api/crm/account/customer.ts">getSection</a>() -> void</code>

### Update

Types:

- <code><a href="./src/resources/api/crm/update.ts">AccountCustomer</a></code>

Methods:

- <code title="patch /api/Crm/update/customer">client.api.crm.update.<a href="./src/resources/api/crm/update.ts">updateCustomer</a>({ ...params }) -> void</code>

## Mvnx

Methods:

- <code title="post /api/Mvnx/port">client.api.mvnx.<a href="./src/resources/api/mvnx/mvnx.ts">createPort</a>({ ...params }) -> void</code>
- <code title="post /api/Mvnx/webhook">client.api.mvnx.<a href="./src/resources/api/mvnx/mvnx.ts">createWebhook</a>({ ...params }) -> void</code>

### History

Methods:

- <code title="get /api/Mvnx/history">client.api.mvnx.history.<a href="./src/resources/api/mvnx/history.ts">list</a>() -> void</code>
- <code title="get /api/Mvnx/history/{msisdn}">client.api.mvnx.history.<a href="./src/resources/api/mvnx/history.ts">retrieveByMsisdn</a>(msisdn) -> void</code>

## Order

Methods:

- <code title="post /api/Order/create">client.api.order.<a href="./src/resources/api/order/order.ts">create</a>({ ...params }) -> void</code>

### Pending

Methods:

- <code title="post /api/Order/pending">client.api.order.pending.<a href="./src/resources/api/order/pending.ts">create</a>({ ...params }) -> void</code>
- <code title="post /api/Order/pending/{msisdn}/process">client.api.order.pending.<a href="./src/resources/api/order/pending.ts">process</a>(msisdn) -> void</code>
- <code title="get /api/Order/pending/{msisdn}">client.api.order.pending.<a href="./src/resources/api/order/pending.ts">retrieveByMsisdn</a>(msisdn) -> void</code>

## Payment

Methods:

- <code title="get /api/Payment/transactions">client.api.payment.<a href="./src/resources/api/payment/payment.ts">listTransactions</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/refund">client.api.payment.<a href="./src/resources/api/payment/payment.ts">refund</a>({ ...params }) -> void</code>

### Paystack

Methods:

- <code title="post /api/Payment/paystack/cancel-subscription">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">cancelSubscription</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/charge">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">charge</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/initialize">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">initialize</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/initialize-combo">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">initializeCombo</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/link-transaction">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">linkTransaction</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/link-transaction-to-services">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">linkTransactionToServices</a>({ ...params }) -> void</code>
- <code title="get /api/Payment/paystack/subscriptions">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">listSubscriptions</a>() -> void</code>
- <code title="get /api/Payment/paystack/subscription/{id}">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">retrieveSubscription</a>(id) -> void</code>
- <code title="post /api/Payment/paystack/subscribe">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">subscribe</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/verify">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">verify</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/paystack/webhook">client.api.payment.paystack.<a href="./src/resources/api/payment/paystack/paystack.ts">webhook</a>() -> void</code>

#### Cards

Methods:

- <code title="get /api/Payment/paystack/cards">client.api.payment.paystack.cards.<a href="./src/resources/api/payment/paystack/cards.ts">list</a>() -> void</code>
- <code title="delete /api/Payment/paystack/cards/{id}">client.api.payment.paystack.cards.<a href="./src/resources/api/payment/paystack/cards.ts">delete</a>(id) -> void</code>

### DynamicServices

Types:

- <code><a href="./src/resources/api/payment/dynamic-services.ts">DynamicServiceRequest</a></code>

Methods:

- <code title="post /api/Payment/dynamic-services/initialize">client.api.payment.dynamicServices.<a href="./src/resources/api/payment/dynamic-services.ts">initialize</a>({ ...params }) -> void</code>
- <code title="post /api/Payment/dynamic-services/recurring">client.api.payment.dynamicServices.<a href="./src/resources/api/payment/dynamic-services.ts">recurring</a>({ ...params }) -> void</code>

### ComboBundle

Methods:

- <code title="post /api/Payment/combo-bundle/recurring">client.api.payment.comboBundle.<a href="./src/resources/api/payment/combo-bundle.ts">recurring</a>({ ...params }) -> void</code>

## Resources

### Inventory

#### Sim

Methods:

- <code title="get /api/Resources/inventory/sim/search">client.api.resources.inventory.sim.<a href="./src/resources/api/resources/inventory/sim.ts">search</a>({ ...params }) -> void</code>

## Rica

Methods:

- <code title="get /api/Rica/document/{type}">client.api.rica.<a href="./src/resources/api/rica/rica.ts">retrieveDocument</a>(type) -> void</code>

### Upload

Methods:

- <code title="post /api/Rica/upload/id">client.api.rica.upload.<a href="./src/resources/api/rica/upload.ts">uploadID</a>({ ...params }) -> void</code>
- <code title="post /api/Rica/upload/poa">client.api.rica.upload.<a href="./src/resources/api/rica/upload.ts">uploadPoa</a>({ ...params }) -> void</code>

## Subscriber

Methods:

- <code title="post /api/Subscriber/create">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/Subscriber/{msisdn}">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">retrieve</a>(msisdn) -> void</code>
- <code title="post /api/Subscriber/{msisdn}/activate">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">activate</a>(msisdn) -> void</code>
- <code title="get /api/Subscriber/{msisdn}/balance">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">getBalance</a>(msisdn) -> void</code>
- <code title="get /api/Subscriber/user">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">getUser</a>({ ...params }) -> void</code>
- <code title="get /api/Subscriber/{msisdn}/is-active">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">isActive</a>(msisdn) -> void</code>
- <code title="get /api/Subscriber/search">client.api.subscriber.<a href="./src/resources/api/subscriber/subscriber.ts">search</a>({ ...params }) -> void</code>

### Service

#### Dynamic

Methods:

- <code title="post /api/Subscriber/{msisdn}/service/dynamic">client.api.subscriber.service.dynamic.<a href="./src/resources/api/subscriber/service/dynamic/dynamic.ts">create</a>(msisdn, { ...params }) -> void</code>

##### Pending

Methods:

- <code title="post /api/Subscriber/{msisdn}/service/dynamic/pending">client.api.subscriber.service.dynamic.pending.<a href="./src/resources/api/subscriber/service/dynamic/pending.ts">create</a>(msisdn, { ...params }) -> void</code>
- <code title="get /api/Subscriber/{msisdn}/service/dynamic/pending">client.api.subscriber.service.dynamic.pending.<a href="./src/resources/api/subscriber/service/dynamic/pending.ts">list</a>(msisdn) -> void</code>
- <code title="post /api/Subscriber/{msisdn}/service/dynamic/pending/process">client.api.subscriber.service.dynamic.pending.<a href="./src/resources/api/subscriber/service/dynamic/pending.ts">process</a>(msisdn) -> void</code>

### Swap

Methods:

- <code title="post /api/Subscriber/{msisdn}/swap/msisdn/{toMsisdn}">client.api.subscriber.swap.<a href="./src/resources/api/subscriber/swap.ts">msisdn</a>(toMsisdn, { ...params }) -> void</code>

## User

Methods:

- <code title="get /api/User">client.api.user.<a href="./src/resources/api/user.ts">list</a>() -> void</code>
- <code title="get /api/User/activate">client.api.user.<a href="./src/resources/api/user.ts">activate</a>() -> void</code>
- <code title="get /api/User/has-account">client.api.user.<a href="./src/resources/api/user.ts">hasAccount</a>() -> void</code>
- <code title="post /api/User/register">client.api.user.<a href="./src/resources/api/user.ts">register</a>({ ...params }) -> void</code>
- <code title="patch /api/User/sim-description">client.api.user.<a href="./src/resources/api/user.ts">updateSimDescription</a>({ ...params }) -> void</code>

## Warehouse

### Tracking

Methods:

- <code title="get /api/Warehouse/tracking/{orderId}/events">client.api.warehouse.tracking.<a href="./src/resources/api/warehouse/tracking/tracking.ts">getEvents</a>(orderID) -> void</code>
- <code title="get /api/Warehouse/tracking/{orderId}/pod">client.api.warehouse.tracking.<a href="./src/resources/api/warehouse/tracking/tracking.ts">getPod</a>(orderID) -> void</code>

#### Msisdn

Methods:

- <code title="get /api/Warehouse/tracking/msisdn/{msisdn}/events">client.api.warehouse.tracking.msisdn.<a href="./src/resources/api/warehouse/tracking/msisdn.ts">getEvents</a>(msisdn) -> void</code>

# Health

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> void</code>
- <code title="get /health/db">client.health.<a href="./src/resources/health.ts">checkDB</a>() -> void</code>
