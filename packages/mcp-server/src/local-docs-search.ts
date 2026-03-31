// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create_token',
    endpoint: '/api/Auth/token',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.auth > (method) create_token',
    qualified: 'client.api.auth.createToken',
    params: ['email?: string;', 'role?: string;', 'secret?: string;', 'tenant?: string;'],
    markdown:
      "## create_token\n\n`client.api.auth.createToken(email?: string, role?: string, secret?: string, tenant?: string): void`\n\n**post** `/api/Auth/token`\n\n### Parameters\n\n- `email?: string`\n\n- `role?: string`\n\n- `secret?: string`\n\n- `tenant?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.auth.createToken()\n```",
  },
  {
    name: 'list_categories',
    endpoint: '/api/Catalog/categories',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.catalog > (method) list_categories',
    qualified: 'client.api.catalog.listCategories',
    params: ['limit?: number;', 'page?: number;'],
    markdown:
      "## list_categories\n\n`client.api.catalog.listCategories(limit?: number, page?: number): void`\n\n**get** `/api/Catalog/categories`\n\n### Parameters\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.catalog.listCategories()\n```",
  },
  {
    name: 'list_products',
    endpoint: '/api/Catalog/search/products',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.catalog.search > (method) list_products',
    qualified: 'client.api.catalog.search.listProducts',
    params: ['id?: string;', 'adhoc?: string;', 'limit?: number;', 'page?: number;'],
    markdown:
      "## list_products\n\n`client.api.catalog.search.listProducts(id?: string, adhoc?: string, limit?: number, page?: number): void`\n\n**get** `/api/Catalog/search/products`\n\n### Parameters\n\n- `id?: string`\n\n- `adhoc?: string`\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.catalog.search.listProducts()\n```",
  },
  {
    name: 'retrieve_product',
    endpoint: '/api/Catalog/search/product/{productId}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.catalog.search > (method) retrieve_product',
    qualified: 'client.api.catalog.search.retrieveProduct',
    params: ['productId: string;'],
    markdown:
      "## retrieve_product\n\n`client.api.catalog.search.retrieveProduct(productId: string): void`\n\n**get** `/api/Catalog/search/product/{productId}`\n\n### Parameters\n\n- `productId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.catalog.search.retrieveProduct('productId')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/Catalog/category/{categoryId}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.catalog.category > (method) retrieve',
    qualified: 'client.api.catalog.category.retrieve',
    params: ['categoryId: string;'],
    markdown:
      "## retrieve\n\n`client.api.catalog.category.retrieve(categoryId: string): void`\n\n**get** `/api/Catalog/category/{categoryId}`\n\n### Parameters\n\n- `categoryId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.catalog.category.retrieve('categoryId')\n```",
  },
  {
    name: 'get_tree',
    endpoint: '/api/Catalog/category/tree',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.catalog.category > (method) get_tree',
    qualified: 'client.api.catalog.category.getTree',
    params: ['groupCode?: string;', 'groupOnly?: boolean;'],
    markdown:
      "## get_tree\n\n`client.api.catalog.category.getTree(groupCode?: string, groupOnly?: boolean): void`\n\n**get** `/api/Catalog/category/tree`\n\n### Parameters\n\n- `groupCode?: string`\n\n- `groupOnly?: boolean`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.catalog.category.getTree()\n```",
  },
  {
    name: 'list_by_category',
    endpoint: '/api/Catalog/products/category/{categoryCode}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.catalog.products > (method) list_by_category',
    qualified: 'client.api.catalog.products.listByCategory',
    params: ['categoryCode: string;', 'descendants?: boolean;', 'limit?: number;', 'page?: number;'],
    markdown:
      "## list_by_category\n\n`client.api.catalog.products.listByCategory(categoryCode: string, descendants?: boolean, limit?: number, page?: number): void`\n\n**get** `/api/Catalog/products/category/{categoryCode}`\n\n### Parameters\n\n- `categoryCode: string`\n\n- `descendants?: boolean`\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.catalog.products.listByCategory('categoryCode')\n```",
  },
  {
    name: 'list_accounts',
    endpoint: '/api/Crm/search/accounts',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.search > (method) list_accounts',
    qualified: 'client.api.crm.search.listAccounts',
    params: [
      'BCycle?: string;',
      'Category?: string;',
      'Class?: string;',
      'FName?: string;',
      'Id?: string;',
      'IdNum?: string;',
      'IdType?: string;',
      'Limit?: number;',
      'LName?: string;',
      'Name?: string;',
      'Page?: number;',
      'RelId?: string;',
      'State?: string;',
      'Type?: string;',
    ],
    markdown:
      "## list_accounts\n\n`client.api.crm.search.listAccounts(BCycle?: string, Category?: string, Class?: string, FName?: string, Id?: string, IdNum?: string, IdType?: string, Limit?: number, LName?: string, Name?: string, Page?: number, RelId?: string, State?: string, Type?: string): void`\n\n**get** `/api/Crm/search/accounts`\n\n### Parameters\n\n- `BCycle?: string`\n\n- `Category?: string`\n\n- `Class?: string`\n\n- `FName?: string`\n\n- `Id?: string`\n\n- `IdNum?: string`\n\n- `IdType?: string`\n\n- `Limit?: number`\n\n- `LName?: string`\n\n- `Name?: string`\n\n- `Page?: number`\n\n- `RelId?: string`\n\n- `State?: string`\n\n- `Type?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.search.listAccounts()\n```",
  },
  {
    name: 'create_contact',
    endpoint: '/api/Crm/create/contact',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.create > (method) create_contact',
    qualified: 'client.api.crm.create.createContact',
    params: [
      "address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; buildingName?: string; buildingNo?: string; city?: string; country?: string; latitude?: string; longitude?: string; oneLineAddress?: string; postCode?: string; referredType?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[];",
      "detail?: { additionalInfo?: string[]; birthDate?: string; firstname?: string; gdprConsent?: boolean; gender?: 'F' | 'M' | 'X'; idNumber?: string; lastname?: string; middlename?: string; organization?: { department?: string; name?: string; office?: string; position?: string; }; password?: string; title?: string; };",
      'email?: { displayOrder?: number; emailAddress?: string; referredType?: string; }[];',
      'externalReference?: string;',
      'name?: string;',
      'personType?: string;',
      "phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; displayOrder?: number; phoneNumber?: string; referredType?: string; }[];",
      'propertyOption?: { id?: string; defaultOption?: string; name?: string; option?: { id?: string; name?: string; }[]; }[];',
      'referredType?: string;',
    ],
    markdown:
      "## create_contact\n\n`client.api.crm.create.createContact(address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; buildingName?: string; buildingNo?: string; city?: string; country?: string; latitude?: string; longitude?: string; oneLineAddress?: string; postCode?: string; referredType?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[], detail?: { additionalInfo?: string[]; birthDate?: string; firstname?: string; gdprConsent?: boolean; gender?: 'F' | 'M' | 'X'; idNumber?: string; lastname?: string; middlename?: string; organization?: { department?: string; name?: string; office?: string; position?: string; }; password?: string; title?: string; }, email?: { displayOrder?: number; emailAddress?: string; referredType?: string; }[], externalReference?: string, name?: string, personType?: string, phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; displayOrder?: number; phoneNumber?: string; referredType?: string; }[], propertyOption?: { id?: string; defaultOption?: string; name?: string; option?: { id?: string; name?: string; }[]; }[], referredType?: string): void`\n\n**post** `/api/Crm/create/contact`\n\n### Parameters\n\n- `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; buildingName?: string; buildingNo?: string; city?: string; country?: string; latitude?: string; longitude?: string; oneLineAddress?: string; postCode?: string; referredType?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n\n- `detail?: { additionalInfo?: string[]; birthDate?: string; firstname?: string; gdprConsent?: boolean; gender?: 'F' | 'M' | 'X'; idNumber?: string; lastname?: string; middlename?: string; organization?: { department?: string; name?: string; office?: string; position?: string; }; password?: string; title?: string; }`\n  - `additionalInfo?: string[]`\n  - `birthDate?: string`\n  - `firstname?: string`\n  - `gdprConsent?: boolean`\n  - `gender?: 'F' | 'M' | 'X'`\n  - `idNumber?: string`\n  - `lastname?: string`\n  - `middlename?: string`\n  - `organization?: { department?: string; name?: string; office?: string; position?: string; }`\n  - `password?: string`\n  - `title?: string`\n\n- `email?: { displayOrder?: number; emailAddress?: string; referredType?: string; }[]`\n\n- `externalReference?: string`\n\n- `name?: string`\n\n- `personType?: string`\n\n- `phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; displayOrder?: number; phoneNumber?: string; referredType?: string; }[]`\n\n- `propertyOption?: { id?: string; defaultOption?: string; name?: string; option?: { id?: string; name?: string; }[]; }[]`\n\n- `referredType?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.create.createContact()\n```",
  },
  {
    name: 'create_customer',
    endpoint: '/api/Crm/create/account/customer',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.create.account > (method) create_customer',
    qualified: 'client.api.crm.create.account.createCustomer',
    params: [
      "address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[];",
      'collectionPlan?: { id?: string; };',
      "contact?: { isAccountOwner?: boolean; isServiceOwner?: boolean; primaryContactRole?: string; useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; };",
      'customer?: { address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }; isResidential?: boolean; };',
      "detail?: { billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }; creditLimit?: number; firstname?: string; hasDeposit?: boolean; identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }; lastname?: string; title?: string; };",
      'isResidential?: boolean;',
      "phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; phoneNumber?: string; };",
      'taxScheme?: { id?: string; };',
    ],
    markdown:
      "## create_customer\n\n`client.api.crm.create.account.createCustomer(address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[], collectionPlan?: { id?: string; }, contact?: { isAccountOwner?: boolean; isServiceOwner?: boolean; primaryContactRole?: string; useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; }, customer?: { address?: account_address[]; detail?: object; isResidential?: boolean; }, detail?: { billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }; creditLimit?: number; firstname?: string; hasDeposit?: boolean; identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }; lastname?: string; title?: string; }, isResidential?: boolean, phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; phoneNumber?: string; }, taxScheme?: { id?: string; }): void`\n\n**post** `/api/Crm/create/account/customer`\n\n### Parameters\n\n- `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n\n- `collectionPlan?: { id?: string; }`\n  - `id?: string`\n\n- `contact?: { isAccountOwner?: boolean; isServiceOwner?: boolean; primaryContactRole?: string; useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; }`\n  - `isAccountOwner?: boolean`\n  - `isServiceOwner?: boolean`\n  - `primaryContactRole?: string`\n  - `useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'`\n\n- `customer?: { address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }; isResidential?: boolean; }`\n  - `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n  - `detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }`\n  - `isResidential?: boolean`\n\n- `detail?: { billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }; creditLimit?: number; firstname?: string; hasDeposit?: boolean; identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }; lastname?: string; title?: string; }`\n  - `billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }`\n  - `creditLimit?: number`\n  - `firstname?: string`\n  - `hasDeposit?: boolean`\n  - `identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }`\n  - `lastname?: string`\n  - `title?: string`\n\n- `isResidential?: boolean`\n\n- `phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; phoneNumber?: string; }`\n  - `contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'`\n  - `phoneNumber?: string`\n\n- `taxScheme?: { id?: string; }`\n  - `id?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.create.account.createCustomer()\n```",
  },
  {
    name: 'create_customer',
    endpoint: '/api/Crm/store/account/customer',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.store.account > (method) create_customer',
    qualified: 'client.api.crm.store.account.createCustomer',
    params: [
      "address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[];",
      'collectionPlan?: { id?: string; };',
      "contact?: { isAccountOwner?: boolean; isServiceOwner?: boolean; primaryContactRole?: string; useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; };",
      'customer?: { address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }; isResidential?: boolean; };',
      "detail?: { billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }; creditLimit?: number; firstname?: string; hasDeposit?: boolean; identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }; lastname?: string; title?: string; };",
      'isResidential?: boolean;',
      "phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; phoneNumber?: string; };",
      'taxScheme?: { id?: string; };',
    ],
    markdown:
      "## create_customer\n\n`client.api.crm.store.account.createCustomer(address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[], collectionPlan?: { id?: string; }, contact?: { isAccountOwner?: boolean; isServiceOwner?: boolean; primaryContactRole?: string; useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; }, customer?: { address?: account_address[]; detail?: object; isResidential?: boolean; }, detail?: { billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }; creditLimit?: number; firstname?: string; hasDeposit?: boolean; identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }; lastname?: string; title?: string; }, isResidential?: boolean, phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; phoneNumber?: string; }, taxScheme?: { id?: string; }): void`\n\n**post** `/api/Crm/store/account/customer`\n\n### Parameters\n\n- `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n\n- `collectionPlan?: { id?: string; }`\n  - `id?: string`\n\n- `contact?: { isAccountOwner?: boolean; isServiceOwner?: boolean; primaryContactRole?: string; useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; }`\n  - `isAccountOwner?: boolean`\n  - `isServiceOwner?: boolean`\n  - `primaryContactRole?: string`\n  - `useParentAddressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'`\n\n- `customer?: { address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }; isResidential?: boolean; }`\n  - `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n  - `detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }`\n  - `isResidential?: boolean`\n\n- `detail?: { billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }; creditLimit?: number; firstname?: string; hasDeposit?: boolean; identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }; lastname?: string; title?: string; }`\n  - `billMedia?: { emailAddress?: string; generationLevel?: 'ACCOUNT' | 'PODEMAND' | 'PURCHORDER'; language?: string; mediaType?: 'SMS' | 'EMAIL'; }`\n  - `creditLimit?: number`\n  - `firstname?: string`\n  - `hasDeposit?: boolean`\n  - `identification?: { idNumber?: string; idType?: 'ID' | 'PASSPORT'; }`\n  - `lastname?: string`\n  - `title?: string`\n\n- `isResidential?: boolean`\n\n- `phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; phoneNumber?: string; }`\n  - `contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'`\n  - `phoneNumber?: string`\n\n- `taxScheme?: { id?: string; }`\n  - `id?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.store.account.createCustomer()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/Crm/account/customer',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.account.customer > (method) retrieve',
    qualified: 'client.api.crm.account.customer.retrieve',
    markdown:
      "## retrieve\n\n`client.api.crm.account.customer.retrieve(): void`\n\n**get** `/api/Crm/account/customer`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.account.customer.retrieve()\n```",
  },
  {
    name: 'get_section',
    endpoint: '/api/Crm/account/customer/section',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.account.customer > (method) get_section',
    qualified: 'client.api.crm.account.customer.getSection',
    markdown:
      "## get_section\n\n`client.api.crm.account.customer.getSection(): void`\n\n**get** `/api/Crm/account/customer/section`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.account.customer.getSection()\n```",
  },
  {
    name: 'update_customer',
    endpoint: '/api/Crm/update/customer',
    httpMethod: 'patch',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.crm.update > (method) update_customer',
    qualified: 'client.api.crm.update.updateCustomer',
    params: [
      "address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[];",
      'detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; };',
      'isResidential?: boolean;',
    ],
    markdown:
      "## update_customer\n\n`client.api.crm.update.updateCustomer(address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[], detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }, isResidential?: boolean): void`\n\n**patch** `/api/Crm/update/customer`\n\n### Parameters\n\n- `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n\n- `detail?: { firstname?: string; lastname?: string; requireSecurityQuestions?: boolean; }`\n  - `firstname?: string`\n  - `lastname?: string`\n  - `requireSecurityQuestions?: boolean`\n\n- `isResidential?: boolean`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.crm.update.updateCustomer()\n```",
  },
  {
    name: 'create_port',
    endpoint: '/api/Mvnx/port',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.mvnx > (method) create_port',
    qualified: 'client.api.mvnx.createPort',
    params: ['newMsisdn: string;', 'oldMsisdn: string;', 'portedAt?: string;', 'reference?: string;'],
    markdown:
      "## create_port\n\n`client.api.mvnx.createPort(newMsisdn: string, oldMsisdn: string, portedAt?: string, reference?: string): void`\n\n**post** `/api/Mvnx/port`\n\n### Parameters\n\n- `newMsisdn: string`\n\n- `oldMsisdn: string`\n\n- `portedAt?: string`\n\n- `reference?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.mvnx.createPort({ newMsisdn: 'x', oldMsisdn: 'x' })\n```",
  },
  {
    name: 'create_webhook',
    endpoint: '/api/Mvnx/webhook',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.mvnx > (method) create_webhook',
    qualified: 'client.api.mvnx.createWebhook',
    params: [
      'id?: string;',
      'data?: { iccid?: string; message?: string; msisdn?: string; ocsid?: string; portId?: string; portMsisdn?: string; status?: string; statusName?: string; subscriberId?: string; };',
      'receivedOn?: string;',
      'sentOn?: string;',
      'type?: string;',
    ],
    markdown:
      "## create_webhook\n\n`client.api.mvnx.createWebhook(id?: string, data?: { iccid?: string; message?: string; msisdn?: string; ocsid?: string; portId?: string; portMsisdn?: string; status?: string; statusName?: string; subscriberId?: string; }, receivedOn?: string, sentOn?: string, type?: string): void`\n\n**post** `/api/Mvnx/webhook`\n\n### Parameters\n\n- `id?: string`\n\n- `data?: { iccid?: string; message?: string; msisdn?: string; ocsid?: string; portId?: string; portMsisdn?: string; status?: string; statusName?: string; subscriberId?: string; }`\n  - `iccid?: string`\n  - `message?: string`\n  - `msisdn?: string`\n  - `ocsid?: string`\n  - `portId?: string`\n  - `portMsisdn?: string`\n  - `status?: string`\n  - `statusName?: string`\n  - `subscriberId?: string`\n\n- `receivedOn?: string`\n\n- `sentOn?: string`\n\n- `type?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.mvnx.createWebhook()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/Mvnx/history',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.mvnx.history > (method) list',
    qualified: 'client.api.mvnx.history.list',
    markdown:
      "## list\n\n`client.api.mvnx.history.list(): void`\n\n**get** `/api/Mvnx/history`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.mvnx.history.list()\n```",
  },
  {
    name: 'retrieve_by_msisdn',
    endpoint: '/api/Mvnx/history/{msisdn}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.mvnx.history > (method) retrieve_by_msisdn',
    qualified: 'client.api.mvnx.history.retrieveByMsisdn',
    params: ['msisdn: string;'],
    markdown:
      "## retrieve_by_msisdn\n\n`client.api.mvnx.history.retrieveByMsisdn(msisdn: string): void`\n\n**get** `/api/Mvnx/history/{msisdn}`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.mvnx.history.retrieveByMsisdn('msisdn')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/Order/create',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.order > (method) create',
    qualified: 'client.api.order.create',
    params: ['msisdn?: string;', 'products?: { id?: string; amount?: number; }[];'],
    markdown:
      "## create\n\n`client.api.order.create(msisdn?: string, products?: { id?: string; amount?: number; }[]): void`\n\n**post** `/api/Order/create`\n\n### Parameters\n\n- `msisdn?: string`\n\n- `products?: { id?: string; amount?: number; }[]`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.order.create()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/Order/pending',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.order.pending > (method) create',
    qualified: 'client.api.order.pending.create',
    params: [
      'msisdn?: string;',
      'paymentReference?: string;',
      'productAmount?: number;',
      'productId?: string;',
    ],
    markdown:
      "## create\n\n`client.api.order.pending.create(msisdn?: string, paymentReference?: string, productAmount?: number, productId?: string): void`\n\n**post** `/api/Order/pending`\n\n### Parameters\n\n- `msisdn?: string`\n\n- `paymentReference?: string`\n\n- `productAmount?: number`\n\n- `productId?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.order.pending.create()\n```",
  },
  {
    name: 'process',
    endpoint: '/api/Order/pending/{msisdn}/process',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.order.pending > (method) process',
    qualified: 'client.api.order.pending.process',
    params: ['msisdn: string;'],
    markdown:
      "## process\n\n`client.api.order.pending.process(msisdn: string): void`\n\n**post** `/api/Order/pending/{msisdn}/process`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.order.pending.process('msisdn')\n```",
  },
  {
    name: 'retrieve_by_msisdn',
    endpoint: '/api/Order/pending/{msisdn}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.order.pending > (method) retrieve_by_msisdn',
    qualified: 'client.api.order.pending.retrieveByMsisdn',
    params: ['msisdn: string;'],
    markdown:
      "## retrieve_by_msisdn\n\n`client.api.order.pending.retrieveByMsisdn(msisdn: string): void`\n\n**get** `/api/Order/pending/{msisdn}`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.order.pending.retrieveByMsisdn('msisdn')\n```",
  },
  {
    name: 'list_transactions',
    endpoint: '/api/Payment/transactions',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment > (method) list_transactions',
    qualified: 'client.api.payment.listTransactions',
    params: ['limit?: number;'],
    markdown:
      "## list_transactions\n\n`client.api.payment.listTransactions(limit?: number): void`\n\n**get** `/api/Payment/transactions`\n\n### Parameters\n\n- `limit?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.listTransactions()\n```",
  },
  {
    name: 'refund',
    endpoint: '/api/Payment/refund',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment > (method) refund',
    qualified: 'client.api.payment.refund',
    params: ['reason: string;', 'transactionReference: string;', 'amountInCents?: number;'],
    markdown:
      "## refund\n\n`client.api.payment.refund(reason: string, transactionReference: string, amountInCents?: number): void`\n\n**post** `/api/Payment/refund`\n\n### Parameters\n\n- `reason: string`\n\n- `transactionReference: string`\n\n- `amountInCents?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.refund({ reason: 'x', transactionReference: 'x' })\n```",
  },
  {
    name: 'cancel_subscription',
    endpoint: '/api/Payment/paystack/cancel-subscription',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) cancel_subscription',
    qualified: 'client.api.payment.paystack.cancelSubscription',
    params: ['msisdn: string;', 'productId: string;'],
    markdown:
      "## cancel_subscription\n\n`client.api.payment.paystack.cancelSubscription(msisdn: string, productId: string): void`\n\n**post** `/api/Payment/paystack/cancel-subscription`\n\n### Parameters\n\n- `msisdn: string`\n\n- `productId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.cancelSubscription({ msisdn: 'x', productId: 'x' })\n```",
  },
  {
    name: 'charge',
    endpoint: '/api/Payment/paystack/charge',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) charge',
    qualified: 'client.api.payment.paystack.charge',
    params: ['amount: number;', 'paymentMethodId: string;'],
    markdown:
      "## charge\n\n`client.api.payment.paystack.charge(amount: number, paymentMethodId: string): void`\n\n**post** `/api/Payment/paystack/charge`\n\n### Parameters\n\n- `amount: number`\n\n- `paymentMethodId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.charge({ amount: 1, paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
  },
  {
    name: 'initialize',
    endpoint: '/api/Payment/paystack/initialize',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) initialize',
    qualified: 'client.api.payment.paystack.initialize',
    params: ['amount: number;', 'productId: string;', 'msisdn?: string;'],
    markdown:
      "## initialize\n\n`client.api.payment.paystack.initialize(amount: number, productId: string, msisdn?: string): void`\n\n**post** `/api/Payment/paystack/initialize`\n\n### Parameters\n\n- `amount: number`\n\n- `productId: string`\n\n- `msisdn?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.initialize({ amount: 1, productId: 'x' })\n```",
  },
  {
    name: 'initialize_combo',
    endpoint: '/api/Payment/paystack/initialize-combo',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) initialize_combo',
    qualified: 'client.api.payment.paystack.initializeCombo',
    params: ['amount: number;', 'productId: string;', 'msisdn?: string;'],
    markdown:
      "## initialize_combo\n\n`client.api.payment.paystack.initializeCombo(amount: number, productId: string, msisdn?: string): void`\n\n**post** `/api/Payment/paystack/initialize-combo`\n\n### Parameters\n\n- `amount: number`\n\n- `productId: string`\n\n- `msisdn?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.initializeCombo({ amount: 1, productId: 'x' })\n```",
  },
  {
    name: 'link_transaction',
    endpoint: '/api/Payment/paystack/link-transaction',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) link_transaction',
    qualified: 'client.api.payment.paystack.linkTransaction',
    params: ['orderId: string;', 'transactionReference: string;'],
    markdown:
      "## link_transaction\n\n`client.api.payment.paystack.linkTransaction(orderId: string, transactionReference: string): void`\n\n**post** `/api/Payment/paystack/link-transaction`\n\n### Parameters\n\n- `orderId: string`\n\n- `transactionReference: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.linkTransaction({ orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', transactionReference: 'x' })\n```",
  },
  {
    name: 'link_transaction_to_services',
    endpoint: '/api/Payment/paystack/link-transaction-to-services',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) link_transaction_to_services',
    qualified: 'client.api.payment.paystack.linkTransactionToServices',
    params: ['serviceIds: string[];', 'transactionReference: string;'],
    markdown:
      "## link_transaction_to_services\n\n`client.api.payment.paystack.linkTransactionToServices(serviceIds: string[], transactionReference: string): void`\n\n**post** `/api/Payment/paystack/link-transaction-to-services`\n\n### Parameters\n\n- `serviceIds: string[]`\n\n- `transactionReference: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.linkTransactionToServices({ serviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], transactionReference: 'x' })\n```",
  },
  {
    name: 'list_subscriptions',
    endpoint: '/api/Payment/paystack/subscriptions',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) list_subscriptions',
    qualified: 'client.api.payment.paystack.listSubscriptions',
    markdown:
      "## list_subscriptions\n\n`client.api.payment.paystack.listSubscriptions(): void`\n\n**get** `/api/Payment/paystack/subscriptions`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.listSubscriptions()\n```",
  },
  {
    name: 'retrieve_subscription',
    endpoint: '/api/Payment/paystack/subscription/{id}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) retrieve_subscription',
    qualified: 'client.api.payment.paystack.retrieveSubscription',
    params: ['id: string;'],
    markdown:
      "## retrieve_subscription\n\n`client.api.payment.paystack.retrieveSubscription(id: string): void`\n\n**get** `/api/Payment/paystack/subscription/{id}`\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.retrieveSubscription('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
  },
  {
    name: 'subscribe',
    endpoint: '/api/Payment/paystack/subscribe',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) subscribe',
    qualified: 'client.api.payment.paystack.subscribe',
    params: ['msisdn: string;', 'paymentMethodId: string;', 'productId: string;'],
    markdown:
      "## subscribe\n\n`client.api.payment.paystack.subscribe(msisdn: string, paymentMethodId: string, productId: string): void`\n\n**post** `/api/Payment/paystack/subscribe`\n\n### Parameters\n\n- `msisdn: string`\n\n- `paymentMethodId: string`\n\n- `productId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.subscribe({\n  msisdn: 'x',\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  productId: 'x',\n})\n```",
  },
  {
    name: 'verify',
    endpoint: '/api/Payment/paystack/verify',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) verify',
    qualified: 'client.api.payment.paystack.verify',
    params: [
      'reference: string;',
      'metadata?: { customerName?: string; customerPhone?: string; msisdn?: string; productId?: string; productName?: string; shippingAddress?: string; };',
      'saveCard?: boolean;',
    ],
    markdown:
      "## verify\n\n`client.api.payment.paystack.verify(reference: string, metadata?: { customerName?: string; customerPhone?: string; msisdn?: string; productId?: string; productName?: string; shippingAddress?: string; }, saveCard?: boolean): void`\n\n**post** `/api/Payment/paystack/verify`\n\n### Parameters\n\n- `reference: string`\n\n- `metadata?: { customerName?: string; customerPhone?: string; msisdn?: string; productId?: string; productName?: string; shippingAddress?: string; }`\n  - `customerName?: string`\n  - `customerPhone?: string`\n  - `msisdn?: string`\n  - `productId?: string`\n  - `productName?: string`\n  - `shippingAddress?: string`\n\n- `saveCard?: boolean`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.verify({ reference: 'x' })\n```",
  },
  {
    name: 'webhook',
    endpoint: '/api/Payment/paystack/webhook',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack > (method) webhook',
    qualified: 'client.api.payment.paystack.webhook',
    markdown:
      "## webhook\n\n`client.api.payment.paystack.webhook(): void`\n\n**post** `/api/Payment/paystack/webhook`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.webhook()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/Payment/paystack/cards',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack.cards > (method) list',
    qualified: 'client.api.payment.paystack.cards.list',
    markdown:
      "## list\n\n`client.api.payment.paystack.cards.list(): void`\n\n**get** `/api/Payment/paystack/cards`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.cards.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/Payment/paystack/cards/{id}',
    httpMethod: 'delete',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.paystack.cards > (method) delete',
    qualified: 'client.api.payment.paystack.cards.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.api.payment.paystack.cards.delete(id: string): void`\n\n**delete** `/api/Payment/paystack/cards/{id}`\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.paystack.cards.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
  },
  {
    name: 'initialize',
    endpoint: '/api/Payment/dynamic-services/initialize',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.dynamic_services > (method) initialize',
    qualified: 'client.api.payment.dynamicServices.initialize',
    params: [
      "services: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[];",
      'msisdn?: string;',
      'shippingCostInCents?: number;',
    ],
    markdown:
      "## initialize\n\n`client.api.payment.dynamicServices.initialize(services: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[], msisdn?: string, shippingCostInCents?: number): void`\n\n**post** `/api/Payment/dynamic-services/initialize`\n\n### Parameters\n\n- `services: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[]`\n\n- `msisdn?: string`\n\n- `shippingCostInCents?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.dynamicServices.initialize({ services: [{}] })\n```",
  },
  {
    name: 'recurring',
    endpoint: '/api/Payment/dynamic-services/recurring',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.dynamic_services > (method) recurring',
    qualified: 'client.api.payment.dynamicServices.recurring',
    params: [
      'msisdn: string;',
      'paymentMethodId: string;',
      "services: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[];",
    ],
    markdown:
      "## recurring\n\n`client.api.payment.dynamicServices.recurring(msisdn: string, paymentMethodId: string, services: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[]): void`\n\n**post** `/api/Payment/dynamic-services/recurring`\n\n### Parameters\n\n- `msisdn: string`\n\n- `paymentMethodId: string`\n\n- `services: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[]`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.dynamicServices.recurring({\n  msisdn: 'x',\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  services: [{}],\n})\n```",
  },
  {
    name: 'recurring',
    endpoint: '/api/Payment/combo-bundle/recurring',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.payment.combo_bundle > (method) recurring',
    qualified: 'client.api.payment.comboBundle.recurring',
    params: ['amount: number;', 'msisdn: string;', 'paymentMethodId: string;', 'productId: string;'],
    markdown:
      "## recurring\n\n`client.api.payment.comboBundle.recurring(amount: number, msisdn: string, paymentMethodId: string, productId: string): void`\n\n**post** `/api/Payment/combo-bundle/recurring`\n\n### Parameters\n\n- `amount: number`\n\n- `msisdn: string`\n\n- `paymentMethodId: string`\n\n- `productId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.payment.comboBundle.recurring({\n  amount: 0,\n  msisdn: 'x',\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  productId: 'x',\n})\n```",
  },
  {
    name: 'search',
    endpoint: '/api/Resources/inventory/sim/search',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.resources.inventory.sim > (method) search',
    qualified: 'client.api.resources.inventory.sim.search',
    params: [
      'id?: string;',
      'accessNo?: string;',
      'dealer?: string;',
      'imsi?: string;',
      'limit?: number;',
      'page?: number;',
      'status?: string;',
      'subStatus?: string;',
    ],
    markdown:
      "## search\n\n`client.api.resources.inventory.sim.search(id?: string, accessNo?: string, dealer?: string, imsi?: string, limit?: number, page?: number, status?: string, subStatus?: string): void`\n\n**get** `/api/Resources/inventory/sim/search`\n\n### Parameters\n\n- `id?: string`\n\n- `accessNo?: string`\n\n- `dealer?: string`\n\n- `imsi?: string`\n\n- `limit?: number`\n\n- `page?: number`\n\n- `status?: string`\n\n- `subStatus?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.resources.inventory.sim.search()\n```",
  },
  {
    name: 'retrieve_document',
    endpoint: '/api/Rica/document/{type}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.rica > (method) retrieve_document',
    qualified: 'client.api.rica.retrieveDocument',
    params: ['type: string;'],
    markdown:
      "## retrieve_document\n\n`client.api.rica.retrieveDocument(type: string): void`\n\n**get** `/api/Rica/document/{type}`\n\n### Parameters\n\n- `type: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.rica.retrieveDocument('type')\n```",
  },
  {
    name: 'upload_id',
    endpoint: '/api/Rica/upload/id',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.rica.upload > (method) upload_id',
    qualified: 'client.api.rica.upload.uploadID',
    params: ['file?: string;'],
    markdown:
      "## upload_id\n\n`client.api.rica.upload.uploadID(file?: string): void`\n\n**post** `/api/Rica/upload/id`\n\n### Parameters\n\n- `file?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.rica.upload.uploadID()\n```",
  },
  {
    name: 'upload_poa',
    endpoint: '/api/Rica/upload/poa',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.rica.upload > (method) upload_poa',
    qualified: 'client.api.rica.upload.uploadPoa',
    params: ['file?: string;'],
    markdown:
      "## upload_poa\n\n`client.api.rica.upload.uploadPoa(file?: string): void`\n\n**post** `/api/Rica/upload/poa`\n\n### Parameters\n\n- `file?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.rica.upload.uploadPoa()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/Subscriber/create',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) create',
    qualified: 'client.api.subscriber.create',
    params: [
      'accountId?: string;',
      "address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[];",
      'eSim?: boolean;',
      'iccid?: string;',
      'productId?: string;',
      "relatedParty?: { id?: string; address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; oneLineAddress?: string; postCode?: string; referredType?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { birthDate?: string; firstname?: string; gdprConsent?: boolean; gender?: string; idNumber?: string; lastname?: string; title?: string; }; email?: { displayOrder?: number; emailAddress?: string; referredType?: string; }[]; isAccountOwner?: boolean; isServiceOwner?: boolean; name?: string; personType?: string; phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; displayOrder?: number; phoneNumber?: string; referredType?: string; }[]; primaryContactRole?: string; referredType?: string; useParentAddressType?: string; }[];",
      'transactionId?: string;',
    ],
    markdown:
      "## create\n\n`client.api.subscriber.create(accountId?: string, address?: { addressType?: address_type; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[], eSim?: boolean, iccid?: string, productId?: string, relatedParty?: { id?: string; address?: { addressType?: address_type; city?: string; country?: string; oneLineAddress?: string; postCode?: string; referredType?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { birthDate?: string; firstname?: string; gdprConsent?: boolean; gender?: string; idNumber?: string; lastname?: string; title?: string; }; email?: { displayOrder?: number; emailAddress?: string; referredType?: string; }[]; isAccountOwner?: boolean; isServiceOwner?: boolean; name?: string; personType?: string; phone?: { contactType?: contact_type; displayOrder?: number; phoneNumber?: string; referredType?: string; }[]; primaryContactRole?: string; referredType?: string; useParentAddressType?: string; }[], transactionId?: string): void`\n\n**post** `/api/Subscriber/create`\n\n### Parameters\n\n- `accountId?: string`\n\n- `address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; postCode?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]`\n\n- `eSim?: boolean`\n\n- `iccid?: string`\n\n- `productId?: string`\n\n- `relatedParty?: { id?: string; address?: { addressType?: 'POSTAL' | 'BILLING' | 'CORRESPONDENCE' | 'REGISTERED' | 'INSTALLATION'; city?: string; country?: string; oneLineAddress?: string; postCode?: string; referredType?: string; stateOrProvince?: string; streetName?: string; streetNo?: string; suburb?: string; }[]; detail?: { birthDate?: string; firstname?: string; gdprConsent?: boolean; gender?: string; idNumber?: string; lastname?: string; title?: string; }; email?: { displayOrder?: number; emailAddress?: string; referredType?: string; }[]; isAccountOwner?: boolean; isServiceOwner?: boolean; name?: string; personType?: string; phone?: { contactType?: 'MOBILE_NO' | 'HOME_NO' | 'BUSINESS' | 'FAX_NO'; displayOrder?: number; phoneNumber?: string; referredType?: string; }[]; primaryContactRole?: string; referredType?: string; useParentAddressType?: string; }[]`\n\n- `transactionId?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/Subscriber/{msisdn}',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) retrieve',
    qualified: 'client.api.subscriber.retrieve',
    params: ['msisdn: string;'],
    markdown:
      "## retrieve\n\n`client.api.subscriber.retrieve(msisdn: string): void`\n\n**get** `/api/Subscriber/{msisdn}`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.retrieve('msisdn')\n```",
  },
  {
    name: 'activate',
    endpoint: '/api/Subscriber/{msisdn}/activate',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) activate',
    qualified: 'client.api.subscriber.activate',
    params: ['msisdn: string;'],
    markdown:
      "## activate\n\n`client.api.subscriber.activate(msisdn: string): void`\n\n**post** `/api/Subscriber/{msisdn}/activate`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.activate('msisdn')\n```",
  },
  {
    name: 'get_balance',
    endpoint: '/api/Subscriber/{msisdn}/balance',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) get_balance',
    qualified: 'client.api.subscriber.getBalance',
    params: ['msisdn: string;'],
    markdown:
      "## get_balance\n\n`client.api.subscriber.getBalance(msisdn: string): void`\n\n**get** `/api/Subscriber/{msisdn}/balance`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.getBalance('msisdn')\n```",
  },
  {
    name: 'get_user',
    endpoint: '/api/Subscriber/user',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) get_user',
    qualified: 'client.api.subscriber.getUser',
    params: ['limit?: number;', 'page?: number;'],
    markdown:
      "## get_user\n\n`client.api.subscriber.getUser(limit?: number, page?: number): void`\n\n**get** `/api/Subscriber/user`\n\n### Parameters\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.getUser()\n```",
  },
  {
    name: 'is_active',
    endpoint: '/api/Subscriber/{msisdn}/is-active',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) is_active',
    qualified: 'client.api.subscriber.isActive',
    params: ['msisdn: string;'],
    markdown:
      "## is_active\n\n`client.api.subscriber.isActive(msisdn: string): void`\n\n**get** `/api/Subscriber/{msisdn}/is-active`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.isActive('msisdn')\n```",
  },
  {
    name: 'search',
    endpoint: '/api/Subscriber/search',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber > (method) search',
    qualified: 'client.api.subscriber.search',
    params: [
      'AccountId?: string;',
      'Active?: string;',
      'AddressId?: string;',
      'CatalogProductId?: string;',
      'CompleteOrder?: string;',
      'CustomerId?: string;',
      'Iccid?: string;',
      'Id?: string;',
      'IsVisible?: string;',
      'Limit?: number;',
      'Msisdn?: string;',
      'Ocsid?: string;',
      'OrderId?: string;',
      'OrderState?: string;',
      'Page?: number;',
      'ProductType?: string;',
      'ServiceType?: string;',
      'State?: string;',
      'Status?: string;',
      'Waybill?: string;',
    ],
    markdown:
      "## search\n\n`client.api.subscriber.search(AccountId?: string, Active?: string, AddressId?: string, CatalogProductId?: string, CompleteOrder?: string, CustomerId?: string, Iccid?: string, Id?: string, IsVisible?: string, Limit?: number, Msisdn?: string, Ocsid?: string, OrderId?: string, OrderState?: string, Page?: number, ProductType?: string, ServiceType?: string, State?: string, Status?: string, Waybill?: string): void`\n\n**get** `/api/Subscriber/search`\n\n### Parameters\n\n- `AccountId?: string`\n\n- `Active?: string`\n\n- `AddressId?: string`\n\n- `CatalogProductId?: string`\n\n- `CompleteOrder?: string`\n\n- `CustomerId?: string`\n\n- `Iccid?: string`\n\n- `Id?: string`\n\n- `IsVisible?: string`\n\n- `Limit?: number`\n\n- `Msisdn?: string`\n\n- `Ocsid?: string`\n\n- `OrderId?: string`\n\n- `OrderState?: string`\n\n- `Page?: number`\n\n- `ProductType?: string`\n\n- `ServiceType?: string`\n\n- `State?: string`\n\n- `Status?: string`\n\n- `Waybill?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.search()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/Subscriber/{msisdn}/service/dynamic',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber.service.dynamic > (method) create',
    qualified: 'client.api.subscriber.service.dynamic.create',
    params: [
      'msisdn: string;',
      "services?: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[];",
    ],
    markdown:
      "## create\n\n`client.api.subscriber.service.dynamic.create(msisdn: string, services?: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[]): void`\n\n**post** `/api/Subscriber/{msisdn}/service/dynamic`\n\n### Parameters\n\n- `msisdn: string`\n\n- `services?: { definitionCode?: 'VOICE' | 'DATA' | 'SMS' | 'WHATSAPP' | 'GPA_CREDIT'; expiryDate?: string; priceInCents?: number; transactionId?: string; value?: number; }[]`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.service.dynamic.create('msisdn')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/Subscriber/{msisdn}/service/dynamic/pending',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber.service.dynamic.pending > (method) create',
    qualified: 'client.api.subscriber.service.dynamic.pending.create',
    params: [
      'msisdn: string;',
      'definitionCode?: string;',
      'expiryDate?: string;',
      'paymentReference?: string;',
      'priceInCents?: number;',
      'value?: number;',
    ],
    markdown:
      "## create\n\n`client.api.subscriber.service.dynamic.pending.create(msisdn: string, definitionCode?: string, expiryDate?: string, paymentReference?: string, priceInCents?: number, value?: number): void`\n\n**post** `/api/Subscriber/{msisdn}/service/dynamic/pending`\n\n### Parameters\n\n- `msisdn: string`\n\n- `definitionCode?: string`\n\n- `expiryDate?: string`\n\n- `paymentReference?: string`\n\n- `priceInCents?: number`\n\n- `value?: number`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.service.dynamic.pending.create('msisdn')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/Subscriber/{msisdn}/service/dynamic/pending',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber.service.dynamic.pending > (method) list',
    qualified: 'client.api.subscriber.service.dynamic.pending.list',
    params: ['msisdn: string;'],
    markdown:
      "## list\n\n`client.api.subscriber.service.dynamic.pending.list(msisdn: string): void`\n\n**get** `/api/Subscriber/{msisdn}/service/dynamic/pending`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.service.dynamic.pending.list('msisdn')\n```",
  },
  {
    name: 'process',
    endpoint: '/api/Subscriber/{msisdn}/service/dynamic/pending/process',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber.service.dynamic.pending > (method) process',
    qualified: 'client.api.subscriber.service.dynamic.pending.process',
    params: ['msisdn: string;'],
    markdown:
      "## process\n\n`client.api.subscriber.service.dynamic.pending.process(msisdn: string): void`\n\n**post** `/api/Subscriber/{msisdn}/service/dynamic/pending/process`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.service.dynamic.pending.process('msisdn')\n```",
  },
  {
    name: 'msisdn',
    endpoint: '/api/Subscriber/{msisdn}/swap/msisdn/{toMsisdn}',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.subscriber.swap > (method) msisdn',
    qualified: 'client.api.subscriber.swap.msisdn',
    params: ['msisdn: string;', 'toMsisdn: string;', 'port?: boolean;'],
    markdown:
      "## msisdn\n\n`client.api.subscriber.swap.msisdn(msisdn: string, toMsisdn: string, port?: boolean): void`\n\n**post** `/api/Subscriber/{msisdn}/swap/msisdn/{toMsisdn}`\n\n### Parameters\n\n- `msisdn: string`\n\n- `toMsisdn: string`\n\n- `port?: boolean`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.subscriber.swap.msisdn('toMsisdn', { msisdn: 'msisdn' })\n```",
  },
  {
    name: 'list',
    endpoint: '/api/User',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.user > (method) list',
    qualified: 'client.api.user.list',
    markdown:
      "## list\n\n`client.api.user.list(): void`\n\n**get** `/api/User`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.user.list()\n```",
  },
  {
    name: 'activate',
    endpoint: '/api/User/activate',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.user > (method) activate',
    qualified: 'client.api.user.activate',
    markdown:
      "## activate\n\n`client.api.user.activate(): void`\n\n**get** `/api/User/activate`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.user.activate()\n```",
  },
  {
    name: 'has_account',
    endpoint: '/api/User/has-account',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.user > (method) has_account',
    qualified: 'client.api.user.hasAccount',
    markdown:
      "## has_account\n\n`client.api.user.hasAccount(): void`\n\n**get** `/api/User/has-account`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.user.hasAccount()\n```",
  },
  {
    name: 'register',
    endpoint: '/api/User/register',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.user > (method) register',
    qualified: 'client.api.user.register',
    params: [
      'emailAddress?: string;',
      'externalId?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'tenant?: string;',
    ],
    markdown:
      "## register\n\n`client.api.user.register(emailAddress?: string, externalId?: string, firstName?: string, lastName?: string, tenant?: string): void`\n\n**post** `/api/User/register`\n\n### Parameters\n\n- `emailAddress?: string`\n\n- `externalId?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `tenant?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.user.register()\n```",
  },
  {
    name: 'update_sim_description',
    endpoint: '/api/User/sim-description',
    httpMethod: 'patch',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.user > (method) update_sim_description',
    qualified: 'client.api.user.updateSimDescription',
    params: ['msisdn: string;', 'simDescription?: string;'],
    markdown:
      "## update_sim_description\n\n`client.api.user.updateSimDescription(msisdn: string, simDescription?: string): void`\n\n**patch** `/api/User/sim-description`\n\n### Parameters\n\n- `msisdn: string`\n\n- `simDescription?: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.user.updateSimDescription({ msisdn: 'msisdn' })\n```",
  },
  {
    name: 'get_events',
    endpoint: '/api/Warehouse/tracking/{orderId}/events',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.warehouse.tracking > (method) get_events',
    qualified: 'client.api.warehouse.tracking.getEvents',
    params: ['orderId: string;'],
    markdown:
      "## get_events\n\n`client.api.warehouse.tracking.getEvents(orderId: string): void`\n\n**get** `/api/Warehouse/tracking/{orderId}/events`\n\n### Parameters\n\n- `orderId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.warehouse.tracking.getEvents('orderId')\n```",
  },
  {
    name: 'get_pod',
    endpoint: '/api/Warehouse/tracking/{orderId}/pod',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.warehouse.tracking > (method) get_pod',
    qualified: 'client.api.warehouse.tracking.getPod',
    params: ['orderId: string;'],
    markdown:
      "## get_pod\n\n`client.api.warehouse.tracking.getPod(orderId: string): void`\n\n**get** `/api/Warehouse/tracking/{orderId}/pod`\n\n### Parameters\n\n- `orderId: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.warehouse.tracking.getPod('orderId')\n```",
  },
  {
    name: 'get_events',
    endpoint: '/api/Warehouse/tracking/msisdn/{msisdn}/events',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) api.warehouse.tracking.msisdn > (method) get_events',
    qualified: 'client.api.warehouse.tracking.msisdn.getEvents',
    params: ['msisdn: string;'],
    markdown:
      "## get_events\n\n`client.api.warehouse.tracking.msisdn.getEvents(msisdn: string): void`\n\n**get** `/api/Warehouse/tracking/msisdn/{msisdn}/events`\n\n### Parameters\n\n- `msisdn: string`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.api.warehouse.tracking.msisdn.getEvents('msisdn')\n```",
  },
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    markdown:
      "## check\n\n`client.health.check(): void`\n\n**get** `/health`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.health.check()\n```",
  },
  {
    name: 'check_db',
    endpoint: '/health/db',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) health > (method) check_db',
    qualified: 'client.health.checkDB',
    markdown:
      "## check_db\n\n`client.health.checkDB(): void`\n\n**get** `/health/db`\n\n### Example\n\n```typescript\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes();\n\nawait client.health.checkDB()\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
