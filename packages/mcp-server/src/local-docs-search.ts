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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Auth/token \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->auth->createToken',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->auth->createToken(\n  email: 'email', role: 'role', secret: 'secret', tenant: 'tenant'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.auth.createToken',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.auth.createToken();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Catalog/categories \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->catalog->listCategories',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->catalog->listCategories(limit: 0, page: 0);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.catalog.listCategories',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.catalog.listCategories();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Catalog/search/products \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->catalog->search->listProducts',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->catalog->search->listProducts(\n  id: 'id', adhoc: 'adhoc', limit: 0, page: 0\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.catalog.search.listProducts',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.catalog.search.listProducts();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Catalog/search/product/$PRODUCT_ID \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->catalog->search->retrieveProduct',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->catalog->search->retrieveProduct('productId');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.catalog.search.retrieveProduct',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.catalog.search.retrieveProduct('productId');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Catalog/category/tree \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->catalog->category->getTree',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->catalog->category->getTree(\n  groupCode: 'groupCode', groupOnly: true\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.catalog.category.getTree',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.catalog.category.getTree();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Catalog/category/$CATEGORY_ID \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->catalog->category->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->catalog->category->retrieve('categoryId');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.catalog.category.retrieve',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.catalog.category.retrieve('categoryId');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Catalog/products/category/$CATEGORY_CODE \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->catalog->products->listByCategory',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->catalog->products->listByCategory(\n  'categoryCode', descendants: true, limit: 0, page: 0\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.catalog.products.listByCategory',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.catalog.products.listByCategory('categoryCode');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/search/accounts \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->search->listAccounts',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->search->listAccounts(\n  bCycle: 'BCycle',\n  category: 'Category',\n  class: 'Class',\n  fName: 'FName',\n  id: 'Id',\n  idNum: 'IdNum',\n  idType: 'IdType',\n  limit: 0,\n  lName: 'LName',\n  name: 'Name',\n  page: 0,\n  relID: 'RelId',\n  state: 'State',\n  type: 'Type',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.search.listAccounts',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.search.listAccounts();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/create/contact \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->create->createContact',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->create->createContact(\n  address: [\n    [\n      'addressType' => AddressType::POSTAL,\n      'buildingName' => 'buildingName',\n      'buildingNo' => 'buildingNo',\n      'city' => 'city',\n      'country' => 'country',\n      'latitude' => 'latitude',\n      'longitude' => 'longitude',\n      'oneLineAddress' => 'oneLineAddress',\n      'postCode' => 'postCode',\n      'referredType' => 'referredType',\n      'stateOrProvince' => 'stateOrProvince',\n      'streetName' => 'streetName',\n      'streetNo' => 'streetNo',\n      'suburb' => 'suburb',\n    ],\n  ],\n  detail: [\n    'additionalInfo' => ['string'],\n    'birthDate' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n    'firstname' => 'firstname',\n    'gdprConsent' => true,\n    'gender' => 'F',\n    'idNumber' => 'idNumber',\n    'lastname' => 'lastname',\n    'middlename' => 'middlename',\n    'organization' => [\n      'department' => 'department',\n      'name' => 'name',\n      'office' => 'office',\n      'position' => 'position',\n    ],\n    'password' => 'password',\n    'title' => 'title',\n  ],\n  email: [\n    [\n      'displayOrder' => 0,\n      'emailAddress' => 'emailAddress',\n      'referredType' => 'referredType',\n    ],\n  ],\n  externalReference: 'externalReference',\n  name: 'name',\n  personType: 'personType',\n  phone: [\n    [\n      'contactType' => ContactType::MOBILE_NO,\n      'displayOrder' => 0,\n      'phoneNumber' => 'phoneNumber',\n      'referredType' => 'referredType',\n    ],\n  ],\n  propertyOption: [\n    [\n      'id' => 'id',\n      'defaultOption' => 'defaultOption',\n      'name' => 'name',\n      'option' => [['id' => 'id', 'name' => 'name']],\n    ],\n  ],\n  referredType: 'referredType',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.create.createContact',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.create.createContact();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/create/account/customer \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->create->account->createCustomer',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->create->account->createCustomer(\n  address: [\n    [\n      'addressType' => AddressType::POSTAL,\n      'city' => 'city',\n      'country' => 'country',\n      'postCode' => 'postCode',\n      'stateOrProvince' => 'stateOrProvince',\n      'streetName' => 'streetName',\n      'streetNo' => 'streetNo',\n      'suburb' => 'suburb',\n    ],\n  ],\n  collectionPlan: ['id' => 'id'],\n  contact: [\n    'isAccountOwner' => true,\n    'isServiceOwner' => true,\n    'primaryContactRole' => 'primaryContactRole',\n    'useParentAddressType' => AddressType::POSTAL,\n  ],\n  customer: [\n    'address' => [\n      [\n        'addressType' => AddressType::POSTAL,\n        'city' => 'city',\n        'country' => 'country',\n        'postCode' => 'postCode',\n        'stateOrProvince' => 'stateOrProvince',\n        'streetName' => 'streetName',\n        'streetNo' => 'streetNo',\n        'suburb' => 'suburb',\n      ],\n    ],\n    'detail' => [\n      'firstname' => 'firstname',\n      'lastname' => 'lastname',\n      'requireSecurityQuestions' => true,\n    ],\n    'isResidential' => true,\n  ],\n  detail: [\n    'billMedia' => [\n      'emailAddress' => 'emailAddress',\n      'generationLevel' => 'ACCOUNT',\n      'language' => 'language',\n      'mediaType' => 'SMS',\n    ],\n    'creditLimit' => 0,\n    'firstname' => 'firstname',\n    'hasDeposit' => true,\n    'identification' => ['idNumber' => 'idNumber', 'idType' => 'ID'],\n    'lastname' => 'lastname',\n    'title' => 'title',\n  ],\n  isResidential: true,\n  phone: [\n    'contactType' => ContactType::MOBILE_NO, 'phoneNumber' => 'phoneNumber'\n  ],\n  taxScheme: ['id' => 'id'],\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.create.account.createCustomer',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.create.account.createCustomer();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/store/account/customer \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->store->account->createCustomer',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->store->account->createCustomer(\n  address: [\n    [\n      'addressType' => AddressType::POSTAL,\n      'city' => 'city',\n      'country' => 'country',\n      'postCode' => 'postCode',\n      'stateOrProvince' => 'stateOrProvince',\n      'streetName' => 'streetName',\n      'streetNo' => 'streetNo',\n      'suburb' => 'suburb',\n    ],\n  ],\n  collectionPlan: ['id' => 'id'],\n  contact: [\n    'isAccountOwner' => true,\n    'isServiceOwner' => true,\n    'primaryContactRole' => 'primaryContactRole',\n    'useParentAddressType' => AddressType::POSTAL,\n  ],\n  customer: [\n    'address' => [\n      [\n        'addressType' => AddressType::POSTAL,\n        'city' => 'city',\n        'country' => 'country',\n        'postCode' => 'postCode',\n        'stateOrProvince' => 'stateOrProvince',\n        'streetName' => 'streetName',\n        'streetNo' => 'streetNo',\n        'suburb' => 'suburb',\n      ],\n    ],\n    'detail' => [\n      'firstname' => 'firstname',\n      'lastname' => 'lastname',\n      'requireSecurityQuestions' => true,\n    ],\n    'isResidential' => true,\n  ],\n  detail: [\n    'billMedia' => [\n      'emailAddress' => 'emailAddress',\n      'generationLevel' => 'ACCOUNT',\n      'language' => 'language',\n      'mediaType' => 'SMS',\n    ],\n    'creditLimit' => 0,\n    'firstname' => 'firstname',\n    'hasDeposit' => true,\n    'identification' => ['idNumber' => 'idNumber', 'idType' => 'ID'],\n    'lastname' => 'lastname',\n    'title' => 'title',\n  ],\n  isResidential: true,\n  phone: [\n    'contactType' => ContactType::MOBILE_NO, 'phoneNumber' => 'phoneNumber'\n  ],\n  taxScheme: ['id' => 'id'],\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.store.account.createCustomer',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.store.account.createCustomer();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/account/customer \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->account->customer->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->account->customer->retrieve();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.account.customer.retrieve',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.account.customer.retrieve();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/account/customer/section \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->account->customer->getSection',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->account->customer->getSection();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.account.customer.getSection',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.account.customer.getSection();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Crm/update/customer \\\n    -X PATCH \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->crm->update->updateCustomer',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->crm->update->updateCustomer(\n  address: [\n    [\n      'addressType' => AddressType::POSTAL,\n      'city' => 'city',\n      'country' => 'country',\n      'postCode' => 'postCode',\n      'stateOrProvince' => 'stateOrProvince',\n      'streetName' => 'streetName',\n      'streetNo' => 'streetNo',\n      'suburb' => 'suburb',\n    ],\n  ],\n  detail: [\n    'firstname' => 'firstname',\n    'lastname' => 'lastname',\n    'requireSecurityQuestions' => true,\n  ],\n  isResidential: true,\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.crm.update.updateCustomer',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.crm.update.updateCustomer();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Mvnx/webhook \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->mvnx->createWebhook',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->mvnx->createWebhook(\n  id: 'id',\n  data: [\n    'iccid' => 'iccid',\n    'message' => 'message',\n    'msisdn' => 'msisdn',\n    'ocsid' => 'ocsid',\n    'portID' => 'portId',\n    'portMsisdn' => 'portMsisdn',\n    'status' => 'status',\n    'statusName' => 'statusName',\n    'subscriberID' => 'subscriberId',\n  ],\n  receivedOn: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  sentOn: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  type: 'type',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.mvnx.createWebhook',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.mvnx.createWebhook();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Mvnx/port \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "newMsisdn": "x",\n          "oldMsisdn": "x"\n        }\'',
      },
      php: {
        method: 'api->mvnx->createPort',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->mvnx->createPort(\n  newMsisdn: 'x',\n  oldMsisdn: 'x',\n  portedAt: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  reference: 'reference',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.mvnx.createPort',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.mvnx.createPort({ newMsisdn: 'x', oldMsisdn: 'x' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Mvnx/history \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->mvnx->history->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->mvnx->history->list();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.mvnx.history.list',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.mvnx.history.list();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Mvnx/history/$MSISDN \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->mvnx->history->retrieveByMsisdn',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->mvnx->history->retrieveByMsisdn('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.mvnx.history.retrieveByMsisdn',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.mvnx.history.retrieveByMsisdn('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Order/create \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->order->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->order->create(\n  msisdn: 'msisdn', products: [['id' => 'id', 'amount' => 0]]\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.order.create',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.order.create();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Order/pending \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->order->pending->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->order->pending->create(\n  msisdn: 'msisdn',\n  paymentReference: 'paymentReference',\n  productAmount: 0,\n  productID: 'productId',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.order.pending.create',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.order.pending.create();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Order/pending/$MSISDN \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->order->pending->retrieveByMsisdn',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->order->pending->retrieveByMsisdn('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.order.pending.retrieveByMsisdn',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.order.pending.retrieveByMsisdn('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Order/pending/$MSISDN/process \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->order->pending->process',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->order->pending->process('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.order.pending.process',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.order.pending.process('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/transactions \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->payment->listTransactions',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->listTransactions(limit: 0);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.listTransactions',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.listTransactions();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/refund \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "reason": "x",\n          "transactionReference": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->refund',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->refund(\n  reason: 'x', transactionReference: 'x', amountInCents: 0\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.refund',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.refund({ reason: 'x', transactionReference: 'x' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/initialize \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "amount": 1,\n          "productId": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->initialize',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->initialize(\n  amount: 1, productID: 'x', msisdn: 'msisdn'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.initialize',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.initialize({ amount: 1, productId: 'x' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/initialize-combo \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "amount": 1,\n          "productId": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->initializeCombo',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->initializeCombo(\n  amount: 1, productID: 'x', msisdn: 'msisdn'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.initializeCombo',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.initializeCombo({ amount: 1, productId: 'x' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/verify \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "reference": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->verify',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->verify(\n  reference: 'x',\n  metadata: [\n    'customerName' => 'customerName',\n    'customerPhone' => 'customerPhone',\n    'msisdn' => 'msisdn',\n    'productID' => 'productId',\n    'productName' => 'productName',\n    'shippingAddress' => 'shippingAddress',\n  ],\n  saveCard: true,\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.verify',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.verify({ reference: 'x' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/link-transaction \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "orderId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "transactionReference": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->linkTransaction',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->linkTransaction(\n  orderID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', transactionReference: 'x'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.linkTransaction',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.linkTransaction({\n  orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  transactionReference: 'x',\n});",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/link-transaction-to-services \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "serviceIds": [\n            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n          ],\n          "transactionReference": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->linkTransactionToServices',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->linkTransactionToServices(\n  serviceIDs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  transactionReference: 'x',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.linkTransactionToServices',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.linkTransactionToServices({\n  serviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  transactionReference: 'x',\n});",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/charge \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "amount": 1,\n          "paymentMethodId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->charge',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->charge(\n  amount: 1, paymentMethodID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.charge',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.charge({\n  amount: 1,\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/subscribe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "msisdn": "x",\n          "paymentMethodId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "productId": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->subscribe',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->subscribe(\n  msisdn: 'x',\n  paymentMethodID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  productID: 'x',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.subscribe',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.subscribe({\n  msisdn: 'x',\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  productId: 'x',\n});",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/subscription/$ID \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->payment->paystack->retrieveSubscription',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->retrieveSubscription(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.retrieveSubscription',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.retrieveSubscription('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/subscriptions \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->payment->paystack->listSubscriptions',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->listSubscriptions();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.listSubscriptions',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.listSubscriptions();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/cancel-subscription \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "msisdn": "x",\n          "productId": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->paystack->cancelSubscription',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->cancelSubscription(\n  msisdn: 'x', productID: 'x'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.cancelSubscription',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.cancelSubscription({ msisdn: 'x', productId: 'x' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/webhook \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->payment->paystack->webhook',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->webhook();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.webhook',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.webhook();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/cards \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->payment->paystack->cards->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->cards->list();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.cards.list',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.cards.list();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/paystack/cards/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->payment->paystack->cards->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->paystack->cards->delete(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.paystack.cards.delete',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.paystack.cards.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/dynamic-services/initialize \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "services": [\n            {}\n          ]\n        }\'',
      },
      php: {
        method: 'api->payment->dynamicServices->initialize',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->dynamicServices->initialize(\n  services: [\n    [\n      'definitionCode' => 'VOICE',\n      'expiryDate' => 'expiryDate',\n      'priceInCents' => 0,\n      'transactionID' => 'transactionId',\n      'value' => 0,\n    ],\n  ],\n  msisdn: 'msisdn',\n  shippingCostInCents: 0,\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.dynamicServices.initialize',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.dynamicServices.initialize({ services: [{}] });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/dynamic-services/recurring \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "msisdn": "x",\n          "paymentMethodId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "services": [\n            {}\n          ]\n        }\'',
      },
      php: {
        method: 'api->payment->dynamicServices->recurring',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->dynamicServices->recurring(\n  msisdn: 'x',\n  paymentMethodID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  services: [\n    [\n      'definitionCode' => 'VOICE',\n      'expiryDate' => 'expiryDate',\n      'priceInCents' => 0,\n      'transactionID' => 'transactionId',\n      'value' => 0,\n    ],\n  ],\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.dynamicServices.recurring',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.dynamicServices.recurring({\n  msisdn: 'x',\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  services: [{}],\n});",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Payment/combo-bundle/recurring \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "amount": 0,\n          "msisdn": "x",\n          "paymentMethodId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "productId": "x"\n        }\'',
      },
      php: {
        method: 'api->payment->comboBundle->recurring',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->payment->comboBundle->recurring(\n  amount: 0,\n  msisdn: 'x',\n  paymentMethodID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  productID: 'x',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.payment.comboBundle.recurring',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.payment.comboBundle.recurring({\n  amount: 0,\n  msisdn: 'x',\n  paymentMethodId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  productId: 'x',\n});",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Resources/inventory/sim/search \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->resources->inventory->sim->search',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->resources->inventory->sim->search(\n  id: 'id',\n  accessNo: 'accessNo',\n  dealer: 'dealer',\n  imsi: 'imsi',\n  limit: 0,\n  page: 0,\n  status: 'status',\n  subStatus: 'subStatus',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.resources.inventory.sim.search',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.resources.inventory.sim.search();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Rica/document/$TYPE \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->rica->retrieveDocument',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->rica->retrieveDocument('type');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.rica.retrieveDocument',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.rica.retrieveDocument('type');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Rica/upload/id \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->rica->upload->uploadID',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->rica->upload->uploadID(file: 'file');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.rica.upload.uploadID',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.rica.upload.uploadID();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Rica/upload/poa \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->rica->upload->uploadPoa',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->rica->upload->uploadPoa(file: 'file');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.rica.upload.uploadPoa',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.rica.upload.uploadPoa();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/activate \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->activate',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->activate('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.activate',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.activate('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/create \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->create(\n  accountID: 'accountId',\n  address: [\n    [\n      'addressType' => AddressType::POSTAL,\n      'city' => 'city',\n      'country' => 'country',\n      'postCode' => 'postCode',\n      'stateOrProvince' => 'stateOrProvince',\n      'streetName' => 'streetName',\n      'streetNo' => 'streetNo',\n      'suburb' => 'suburb',\n    ],\n  ],\n  eSim: true,\n  iccid: 'iccid',\n  productID: 'productId',\n  relatedParty: [\n    [\n      'id' => 'id',\n      'address' => [\n        [\n          'addressType' => AddressType::POSTAL,\n          'city' => 'city',\n          'country' => 'country',\n          'oneLineAddress' => 'oneLineAddress',\n          'postCode' => 'postCode',\n          'referredType' => 'referredType',\n          'stateOrProvince' => 'stateOrProvince',\n          'streetName' => 'streetName',\n          'streetNo' => 'streetNo',\n          'suburb' => 'suburb',\n        ],\n      ],\n      'detail' => [\n        'birthDate' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n        'firstname' => 'firstname',\n        'gdprConsent' => true,\n        'gender' => 'gender',\n        'idNumber' => 'idNumber',\n        'lastname' => 'lastname',\n        'title' => 'title',\n      ],\n      'email' => [\n        [\n          'displayOrder' => 0,\n          'emailAddress' => 'emailAddress',\n          'referredType' => 'referredType',\n        ],\n      ],\n      'isAccountOwner' => true,\n      'isServiceOwner' => true,\n      'name' => 'name',\n      'personType' => 'personType',\n      'phone' => [\n        [\n          'contactType' => ContactType::MOBILE_NO,\n          'displayOrder' => 0,\n          'phoneNumber' => 'phoneNumber',\n          'referredType' => 'referredType',\n        ],\n      ],\n      'primaryContactRole' => 'primaryContactRole',\n      'referredType' => 'referredType',\n      'useParentAddressType' => 'useParentAddressType',\n    ],\n  ],\n  transactionID: 'transactionId',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.create',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.create();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->retrieve('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.retrieve',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.retrieve('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/balance \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->getBalance',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->getBalance('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.getBalance',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.getBalance('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/search \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->search',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->search(\n  accountID: 'AccountId',\n  active: 'Active',\n  addressID: 'AddressId',\n  catalogProductID: 'CatalogProductId',\n  completeOrder: 'CompleteOrder',\n  customerID: 'CustomerId',\n  iccid: 'Iccid',\n  id: 'Id',\n  isVisible: 'IsVisible',\n  limit: 0,\n  msisdn: 'Msisdn',\n  ocsid: 'Ocsid',\n  orderID: 'OrderId',\n  orderState: 'OrderState',\n  page: 0,\n  productType: 'ProductType',\n  serviceType: 'ServiceType',\n  state: 'State',\n  status: 'Status',\n  waybill: 'Waybill',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.search',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.search();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/user \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->getUser',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->getUser(limit: 0, page: 0);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.getUser',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.getUser();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/is-active \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->isActive',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->isActive('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.isActive',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.isActive('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/service/dynamic \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->service->dynamic->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->service->dynamic->create(\n  'msisdn',\n  services: [\n    [\n      'definitionCode' => 'VOICE',\n      'expiryDate' => 'expiryDate',\n      'priceInCents' => 0,\n      'transactionID' => 'transactionId',\n      'value' => 0,\n    ],\n  ],\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.service.dynamic.create',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.service.dynamic.create('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/service/dynamic/pending \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->service->dynamic->pending->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->service->dynamic->pending->create(\n  'msisdn',\n  definitionCode: 'definitionCode',\n  expiryDate: '2019-12-27',\n  paymentReference: 'paymentReference',\n  priceInCents: 0,\n  value: 0,\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.service.dynamic.pending.create',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.service.dynamic.pending.create('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/service/dynamic/pending \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->service->dynamic->pending->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->service->dynamic->pending->list('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.service.dynamic.pending.list',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.service.dynamic.pending.list('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/service/dynamic/pending/process \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->service->dynamic->pending->process',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->service->dynamic->pending->process(\n  'msisdn'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.service.dynamic.pending.process',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.service.dynamic.pending.process('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Subscriber/$MSISDN/swap/msisdn/$TO_MSISDN \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->subscriber->swap->msisdn',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->subscriber->swap->msisdn(\n  'toMsisdn', msisdn: 'msisdn', port: true\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.subscriber.swap.msisdn',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.subscriber.swap.msisdn('toMsisdn', { msisdn: 'msisdn' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/User \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->user->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->user->list();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.user.list',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.user.list();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/User/register \\\n    -X POST \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->user->register',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->user->register(\n  emailAddress: 'emailAddress',\n  externalID: 'externalId',\n  firstName: 'firstName',\n  lastName: 'lastName',\n  tenant: 'tenant',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.user.register',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.user.register();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/User/activate \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->user->activate',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->user->activate();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.user.activate',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.user.activate();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/User/has-account \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->user->hasAccount',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->user->hasAccount();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.user.hasAccount',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.user.hasAccount();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/User/sim-description \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY" \\\n    -d \'{\n          "msisdn": "msisdn"\n        }\'',
      },
      php: {
        method: 'api->user->updateSimDescription',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->user->updateSimDescription(\n  msisdn: 'msisdn', simDescription: 'simDescription'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.user.updateSimDescription',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.user.updateSimDescription({ msisdn: 'msisdn' });",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Warehouse/tracking/$ORDER_ID/pod \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->warehouse->tracking->getPod',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->warehouse->tracking->getPod('orderId');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.warehouse.tracking.getPod',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.warehouse.tracking.getPod('orderId');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Warehouse/tracking/$ORDER_ID/events \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->warehouse->tracking->getEvents',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->warehouse->tracking->getEvents('orderId');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.warehouse.tracking.getEvents',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.warehouse.tracking.getEvents('orderId');",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/api/Warehouse/tracking/msisdn/$MSISDN/events \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'api->warehouse->tracking->msisdn->getEvents',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->api->warehouse->tracking->msisdn->getEvents('msisdn');\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.api.warehouse.tracking.msisdn.getEvents',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.warehouse.tracking.msisdn.getEvents('msisdn');",
      },
    },
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
    perLanguage: {
      http: {
        example: 'curl https://api.example.com/health \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'health->check',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->health->check();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.health.check',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.health.check();",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/health/db \\\n    -H "Authorization: Bearer $SDK_LIMES_API_KEY"',
      },
      php: {
        method: 'health->checkDB',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->health->checkDB();\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.health.checkDB',
        example:
          "import SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.health.checkDB();",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# SDK Limes TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/sdk-limes.svg?label=npm%20(stable))](https://npmjs.org/package/sdk-limes) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/sdk-limes)\n\nThis library provides convenient access to the SDK Limes REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the SDK Limes MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=sdk-limes-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInNkay1saW1lcy1tY3AiXSwiZW52Ijp7IlNES19MSU1FU19BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22sdk-limes-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22sdk-limes-mcp%22%5D%2C%22env%22%3A%7B%22SDK_LIMES_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:imtiyaazsalie/sdk-limes-typescript.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install sdk-limes`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.auth.createToken();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  apiKey: process.env['SDK_LIMES_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.api.auth.createToken();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport SDKLimes, { toFile } from 'sdk-limes';\n\nconst client = new SDKLimes();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.api.rica.upload.uploadID({ file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.api.rica.upload.uploadID({ file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.api.rica.upload.uploadID({ file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.api.rica.upload.uploadID({ file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.api.rica.upload.uploadID({ file: await toFile(new Uint8Array([0, 1, 2]), 'file') });\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.api.auth.createToken().catch(async (err) => {\n  if (err instanceof SDKLimes.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new SDKLimes({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.api.auth.createToken({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new SDKLimes({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.api.auth.createToken({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new SDKLimes();\n\nconst response = await client.api.auth.createToken().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: result, response: raw } = await client.api.auth.createToken().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(result);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `SDK_LIMES_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport SDKLimes from 'sdk-limes';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new SDKLimes({\n  logger: logger.child({ name: 'SDKLimes' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.api.auth.createToken({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport SDKLimes from 'sdk-limes';\nimport fetch from 'my-fetch';\n\nconst client = new SDKLimes({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport SDKLimes from 'sdk-limes';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new SDKLimes({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport SDKLimes from 'sdk-limes';\n\nconst client = new SDKLimes({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport SDKLimes from 'npm:sdk-limes';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new SDKLimes({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/imtiyaazsalie/sdk-limes-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'php',
    content:
      '# SDK Limes PHP API Library\n\nThe SDK Limes PHP library provides convenient access to the SDK Limes REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n<!-- x-release-please-start-version -->\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:imtiyaazsalie/sdk-limes-php.git"\n    }\n  ],\n  "require": {\n    "org-placeholder/sdk-limes": "dev-main"\n  }\n}\n```\n<!-- x-release-please-end -->\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(apiKey: getenv(\'SDK_LIMES_API_KEY\') ?: \'My API Key\');\n\n$result = $client->api->auth->createToken();\n\nvar_dump($result);\n```',
  },
];

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
