# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCurrentUser*](#getcurrentuser)
  - [*ListUsers*](#listusers)
  - [*GetCategory*](#getcategory)
  - [*ListCategories*](#listcategories)
  - [*GetNotice*](#getnotice)
  - [*ListNotices*](#listnotices)
  - [*GetMaintenanceRequest*](#getmaintenancerequest)
  - [*ListMyMaintenanceRequests*](#listmymaintenancerequests)
  - [*GetComment*](#getcomment)
  - [*ListComments*](#listcomments)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateCategory*](#createcategory)
  - [*UpdateCategory*](#updatecategory)
  - [*DeleteCategory*](#deletecategory)
  - [*CreateNotice*](#createnotice)
  - [*UpdateNotice*](#updatenotice)
  - [*DeleteNotice*](#deletenotice)
  - [*CreateMaintenanceRequest*](#createmaintenancerequest)
  - [*UpdateMaintenanceRequest*](#updatemaintenancerequest)
  - [*DeleteMaintenanceRequest*](#deletemaintenancerequest)
  - [*CreateComment*](#createcomment)
  - [*UpdateComment*](#updatecomment)
  - [*DeleteComment*](#deletecomment)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCurrentUser
You can execute the `GetCurrentUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCurrentUser(options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface GetCurrentUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserData, undefined>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCurrentUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface GetCurrentUserRef {
  ...
  (dc: DataConnect): QueryRef<GetCurrentUserData, undefined>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCurrentUserRef:
```typescript
const name = getCurrentUserRef.operationName;
console.log(name);
```

### Variables
The `GetCurrentUser` query has no variables.
### Return Type
Recall that executing the `GetCurrentUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCurrentUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCurrentUserData {
  user?: {
    username: string;
    email: string;
    role: string;
  };
}
```
### Using `GetCurrentUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCurrentUser } from '@dataconnect/generated';


// Call the `getCurrentUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCurrentUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCurrentUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getCurrentUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetCurrentUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserRef } from '@dataconnect/generated';


// Call the `getCurrentUserRef()` function to get a reference to the query.
const ref = getCurrentUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCurrentUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    username: string;
    email: string;
  })[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetCategory
You can execute the `GetCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCategory(options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, undefined>;

interface GetCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCategoryData, undefined>;
}
export const getCategoryRef: GetCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCategory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, undefined>;

interface GetCategoryRef {
  ...
  (dc: DataConnect): QueryRef<GetCategoryData, undefined>;
}
export const getCategoryRef: GetCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCategoryRef:
```typescript
const name = getCategoryRef.operationName;
console.log(name);
```

### Variables
The `GetCategory` query has no variables.
### Return Type
Recall that executing the `GetCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCategoryData {
  category?: {
    name: string;
  };
}
```
### Using `GetCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCategory } from '@dataconnect/generated';


// Call the `getCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCategory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCategory(dataConnect);

console.log(data.category);

// Or, you can use the `Promise` API.
getCategory().then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

### Using `GetCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCategoryRef } from '@dataconnect/generated';


// Call the `getCategoryRef()` function to get a reference to the query.
const ref = getCategoryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCategoryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.category);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

## ListCategories
You can execute the `ListCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCategories(options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface ListCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesData, undefined>;
}
export const listCategoriesRef: ListCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface ListCategoriesRef {
  ...
  (dc: DataConnect): QueryRef<ListCategoriesData, undefined>;
}
export const listCategoriesRef: ListCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCategoriesRef:
```typescript
const name = listCategoriesRef.operationName;
console.log(name);
```

### Variables
The `ListCategories` query has no variables.
### Return Type
Recall that executing the `ListCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCategoriesData {
  categories: ({
    name: string;
  })[];
}
```
### Using `ListCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCategories } from '@dataconnect/generated';


// Call the `listCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCategories();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCategories(dataConnect);

console.log(data.categories);

// Or, you can use the `Promise` API.
listCategories().then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `ListCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCategoriesRef } from '@dataconnect/generated';


// Call the `listCategoriesRef()` function to get a reference to the query.
const ref = listCategoriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCategoriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

## GetNotice
You can execute the `GetNotice` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getNotice(options?: ExecuteQueryOptions): QueryPromise<GetNoticeData, undefined>;

interface GetNoticeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetNoticeData, undefined>;
}
export const getNoticeRef: GetNoticeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getNotice(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetNoticeData, undefined>;

interface GetNoticeRef {
  ...
  (dc: DataConnect): QueryRef<GetNoticeData, undefined>;
}
export const getNoticeRef: GetNoticeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getNoticeRef:
```typescript
const name = getNoticeRef.operationName;
console.log(name);
```

### Variables
The `GetNotice` query has no variables.
### Return Type
Recall that executing the `GetNotice` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetNoticeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetNoticeData {
  notice?: {
    title: string;
    content: string;
  };
}
```
### Using `GetNotice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getNotice } from '@dataconnect/generated';


// Call the `getNotice()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getNotice();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getNotice(dataConnect);

console.log(data.notice);

// Or, you can use the `Promise` API.
getNotice().then((response) => {
  const data = response.data;
  console.log(data.notice);
});
```

### Using `GetNotice`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getNoticeRef } from '@dataconnect/generated';


// Call the `getNoticeRef()` function to get a reference to the query.
const ref = getNoticeRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getNoticeRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.notice);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.notice);
});
```

## ListNotices
You can execute the `ListNotices` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listNotices(options?: ExecuteQueryOptions): QueryPromise<ListNoticesData, undefined>;

interface ListNoticesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListNoticesData, undefined>;
}
export const listNoticesRef: ListNoticesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listNotices(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListNoticesData, undefined>;

interface ListNoticesRef {
  ...
  (dc: DataConnect): QueryRef<ListNoticesData, undefined>;
}
export const listNoticesRef: ListNoticesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listNoticesRef:
```typescript
const name = listNoticesRef.operationName;
console.log(name);
```

### Variables
The `ListNotices` query has no variables.
### Return Type
Recall that executing the `ListNotices` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListNoticesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListNoticesData {
  notices: ({
    title: string;
  })[];
}
```
### Using `ListNotices`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listNotices } from '@dataconnect/generated';


// Call the `listNotices()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listNotices();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listNotices(dataConnect);

console.log(data.notices);

// Or, you can use the `Promise` API.
listNotices().then((response) => {
  const data = response.data;
  console.log(data.notices);
});
```

### Using `ListNotices`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listNoticesRef } from '@dataconnect/generated';


// Call the `listNoticesRef()` function to get a reference to the query.
const ref = listNoticesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listNoticesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.notices);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.notices);
});
```

## GetMaintenanceRequest
You can execute the `GetMaintenanceRequest` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMaintenanceRequest(options?: ExecuteQueryOptions): QueryPromise<GetMaintenanceRequestData, undefined>;

interface GetMaintenanceRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMaintenanceRequestData, undefined>;
}
export const getMaintenanceRequestRef: GetMaintenanceRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMaintenanceRequest(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMaintenanceRequestData, undefined>;

interface GetMaintenanceRequestRef {
  ...
  (dc: DataConnect): QueryRef<GetMaintenanceRequestData, undefined>;
}
export const getMaintenanceRequestRef: GetMaintenanceRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMaintenanceRequestRef:
```typescript
const name = getMaintenanceRequestRef.operationName;
console.log(name);
```

### Variables
The `GetMaintenanceRequest` query has no variables.
### Return Type
Recall that executing the `GetMaintenanceRequest` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMaintenanceRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMaintenanceRequestData {
  maintenanceRequest?: {
    description: string;
    status: string;
  };
}
```
### Using `GetMaintenanceRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMaintenanceRequest } from '@dataconnect/generated';


// Call the `getMaintenanceRequest()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMaintenanceRequest();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMaintenanceRequest(dataConnect);

console.log(data.maintenanceRequest);

// Or, you can use the `Promise` API.
getMaintenanceRequest().then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest);
});
```

### Using `GetMaintenanceRequest`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMaintenanceRequestRef } from '@dataconnect/generated';


// Call the `getMaintenanceRequestRef()` function to get a reference to the query.
const ref = getMaintenanceRequestRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMaintenanceRequestRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.maintenanceRequest);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest);
});
```

## ListMyMaintenanceRequests
You can execute the `ListMyMaintenanceRequests` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyMaintenanceRequests(options?: ExecuteQueryOptions): QueryPromise<ListMyMaintenanceRequestsData, undefined>;

interface ListMyMaintenanceRequestsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyMaintenanceRequestsData, undefined>;
}
export const listMyMaintenanceRequestsRef: ListMyMaintenanceRequestsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyMaintenanceRequests(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyMaintenanceRequestsData, undefined>;

interface ListMyMaintenanceRequestsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyMaintenanceRequestsData, undefined>;
}
export const listMyMaintenanceRequestsRef: ListMyMaintenanceRequestsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyMaintenanceRequestsRef:
```typescript
const name = listMyMaintenanceRequestsRef.operationName;
console.log(name);
```

### Variables
The `ListMyMaintenanceRequests` query has no variables.
### Return Type
Recall that executing the `ListMyMaintenanceRequests` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyMaintenanceRequestsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyMaintenanceRequestsData {
  maintenanceRequests: ({
    description: string;
    status: string;
  })[];
}
```
### Using `ListMyMaintenanceRequests`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyMaintenanceRequests } from '@dataconnect/generated';


// Call the `listMyMaintenanceRequests()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyMaintenanceRequests();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyMaintenanceRequests(dataConnect);

console.log(data.maintenanceRequests);

// Or, you can use the `Promise` API.
listMyMaintenanceRequests().then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequests);
});
```

### Using `ListMyMaintenanceRequests`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyMaintenanceRequestsRef } from '@dataconnect/generated';


// Call the `listMyMaintenanceRequestsRef()` function to get a reference to the query.
const ref = listMyMaintenanceRequestsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyMaintenanceRequestsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.maintenanceRequests);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequests);
});
```

## GetComment
You can execute the `GetComment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getComment(options?: ExecuteQueryOptions): QueryPromise<GetCommentData, undefined>;

interface GetCommentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCommentData, undefined>;
}
export const getCommentRef: GetCommentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getComment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCommentData, undefined>;

interface GetCommentRef {
  ...
  (dc: DataConnect): QueryRef<GetCommentData, undefined>;
}
export const getCommentRef: GetCommentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCommentRef:
```typescript
const name = getCommentRef.operationName;
console.log(name);
```

### Variables
The `GetComment` query has no variables.
### Return Type
Recall that executing the `GetComment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCommentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCommentData {
  comment?: {
    text: string;
  };
}
```
### Using `GetComment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getComment } from '@dataconnect/generated';


// Call the `getComment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getComment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getComment(dataConnect);

console.log(data.comment);

// Or, you can use the `Promise` API.
getComment().then((response) => {
  const data = response.data;
  console.log(data.comment);
});
```

### Using `GetComment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCommentRef } from '@dataconnect/generated';


// Call the `getCommentRef()` function to get a reference to the query.
const ref = getCommentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCommentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.comment);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.comment);
});
```

## ListComments
You can execute the `ListComments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listComments(options?: ExecuteQueryOptions): QueryPromise<ListCommentsData, undefined>;

interface ListCommentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCommentsData, undefined>;
}
export const listCommentsRef: ListCommentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listComments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCommentsData, undefined>;

interface ListCommentsRef {
  ...
  (dc: DataConnect): QueryRef<ListCommentsData, undefined>;
}
export const listCommentsRef: ListCommentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCommentsRef:
```typescript
const name = listCommentsRef.operationName;
console.log(name);
```

### Variables
The `ListComments` query has no variables.
### Return Type
Recall that executing the `ListComments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCommentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCommentsData {
  comments: ({
    text: string;
  })[];
}
```
### Using `ListComments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listComments } from '@dataconnect/generated';


// Call the `listComments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listComments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listComments(dataConnect);

console.log(data.comments);

// Or, you can use the `Promise` API.
listComments().then((response) => {
  const data = response.data;
  console.log(data.comments);
});
```

### Using `ListComments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCommentsRef } from '@dataconnect/generated';


// Call the `listCommentsRef()` function to get a reference to the query.
const ref = listCommentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCommentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.comments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.comments);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has no variables.
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser } from '@dataconnect/generated';


// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser().then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef } from '@dataconnect/generated';


// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateCategory
You can execute the `CreateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCategory(): MutationPromise<CreateCategoryData, undefined>;

interface CreateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCategoryData, undefined>;
}
export const createCategoryRef: CreateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCategory(dc: DataConnect): MutationPromise<CreateCategoryData, undefined>;

interface CreateCategoryRef {
  ...
  (dc: DataConnect): MutationRef<CreateCategoryData, undefined>;
}
export const createCategoryRef: CreateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCategoryRef:
```typescript
const name = createCategoryRef.operationName;
console.log(name);
```

### Variables
The `CreateCategory` mutation has no variables.
### Return Type
Recall that executing the `CreateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCategoryData {
  category_insert: Category_Key;
}
```
### Using `CreateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCategory } from '@dataconnect/generated';


// Call the `createCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCategory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCategory(dataConnect);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
createCategory().then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

### Using `CreateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCategoryRef } from '@dataconnect/generated';


// Call the `createCategoryRef()` function to get a reference to the mutation.
const ref = createCategoryRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCategoryRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

## UpdateCategory
You can execute the `UpdateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCategory(): MutationPromise<UpdateCategoryData, undefined>;

interface UpdateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateCategoryData, undefined>;
}
export const updateCategoryRef: UpdateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCategory(dc: DataConnect): MutationPromise<UpdateCategoryData, undefined>;

interface UpdateCategoryRef {
  ...
  (dc: DataConnect): MutationRef<UpdateCategoryData, undefined>;
}
export const updateCategoryRef: UpdateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCategoryRef:
```typescript
const name = updateCategoryRef.operationName;
console.log(name);
```

### Variables
The `UpdateCategory` mutation has no variables.
### Return Type
Recall that executing the `UpdateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}
```
### Using `UpdateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCategory } from '@dataconnect/generated';


// Call the `updateCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCategory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCategory(dataConnect);

console.log(data.category_update);

// Or, you can use the `Promise` API.
updateCategory().then((response) => {
  const data = response.data;
  console.log(data.category_update);
});
```

### Using `UpdateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCategoryRef } from '@dataconnect/generated';


// Call the `updateCategoryRef()` function to get a reference to the mutation.
const ref = updateCategoryRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCategoryRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_update);
});
```

## DeleteCategory
You can execute the `DeleteCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteCategory(): MutationPromise<DeleteCategoryData, undefined>;

interface DeleteCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteCategoryData, undefined>;
}
export const deleteCategoryRef: DeleteCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteCategory(dc: DataConnect): MutationPromise<DeleteCategoryData, undefined>;

interface DeleteCategoryRef {
  ...
  (dc: DataConnect): MutationRef<DeleteCategoryData, undefined>;
}
export const deleteCategoryRef: DeleteCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCategoryRef:
```typescript
const name = deleteCategoryRef.operationName;
console.log(name);
```

### Variables
The `DeleteCategory` mutation has no variables.
### Return Type
Recall that executing the `DeleteCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}
```
### Using `DeleteCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteCategory } from '@dataconnect/generated';


// Call the `deleteCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteCategory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteCategory(dataConnect);

console.log(data.category_delete);

// Or, you can use the `Promise` API.
deleteCategory().then((response) => {
  const data = response.data;
  console.log(data.category_delete);
});
```

### Using `DeleteCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCategoryRef } from '@dataconnect/generated';


// Call the `deleteCategoryRef()` function to get a reference to the mutation.
const ref = deleteCategoryRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCategoryRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_delete);
});
```

## CreateNotice
You can execute the `CreateNotice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNotice(): MutationPromise<CreateNoticeData, undefined>;

interface CreateNoticeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNoticeData, undefined>;
}
export const createNoticeRef: CreateNoticeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNotice(dc: DataConnect): MutationPromise<CreateNoticeData, undefined>;

interface CreateNoticeRef {
  ...
  (dc: DataConnect): MutationRef<CreateNoticeData, undefined>;
}
export const createNoticeRef: CreateNoticeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNoticeRef:
```typescript
const name = createNoticeRef.operationName;
console.log(name);
```

### Variables
The `CreateNotice` mutation has no variables.
### Return Type
Recall that executing the `CreateNotice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNoticeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNoticeData {
  notice_insert: Notice_Key;
}
```
### Using `CreateNotice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNotice } from '@dataconnect/generated';


// Call the `createNotice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNotice();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNotice(dataConnect);

console.log(data.notice_insert);

// Or, you can use the `Promise` API.
createNotice().then((response) => {
  const data = response.data;
  console.log(data.notice_insert);
});
```

### Using `CreateNotice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNoticeRef } from '@dataconnect/generated';


// Call the `createNoticeRef()` function to get a reference to the mutation.
const ref = createNoticeRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNoticeRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.notice_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.notice_insert);
});
```

## UpdateNotice
You can execute the `UpdateNotice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateNotice(): MutationPromise<UpdateNoticeData, undefined>;

interface UpdateNoticeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateNoticeData, undefined>;
}
export const updateNoticeRef: UpdateNoticeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateNotice(dc: DataConnect): MutationPromise<UpdateNoticeData, undefined>;

interface UpdateNoticeRef {
  ...
  (dc: DataConnect): MutationRef<UpdateNoticeData, undefined>;
}
export const updateNoticeRef: UpdateNoticeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateNoticeRef:
```typescript
const name = updateNoticeRef.operationName;
console.log(name);
```

### Variables
The `UpdateNotice` mutation has no variables.
### Return Type
Recall that executing the `UpdateNotice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateNoticeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateNoticeData {
  notice_update?: Notice_Key | null;
}
```
### Using `UpdateNotice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateNotice } from '@dataconnect/generated';


// Call the `updateNotice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateNotice();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateNotice(dataConnect);

console.log(data.notice_update);

// Or, you can use the `Promise` API.
updateNotice().then((response) => {
  const data = response.data;
  console.log(data.notice_update);
});
```

### Using `UpdateNotice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateNoticeRef } from '@dataconnect/generated';


// Call the `updateNoticeRef()` function to get a reference to the mutation.
const ref = updateNoticeRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateNoticeRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.notice_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.notice_update);
});
```

## DeleteNotice
You can execute the `DeleteNotice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteNotice(): MutationPromise<DeleteNoticeData, undefined>;

interface DeleteNoticeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteNoticeData, undefined>;
}
export const deleteNoticeRef: DeleteNoticeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteNotice(dc: DataConnect): MutationPromise<DeleteNoticeData, undefined>;

interface DeleteNoticeRef {
  ...
  (dc: DataConnect): MutationRef<DeleteNoticeData, undefined>;
}
export const deleteNoticeRef: DeleteNoticeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteNoticeRef:
```typescript
const name = deleteNoticeRef.operationName;
console.log(name);
```

### Variables
The `DeleteNotice` mutation has no variables.
### Return Type
Recall that executing the `DeleteNotice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteNoticeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteNoticeData {
  notice_delete?: Notice_Key | null;
}
```
### Using `DeleteNotice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteNotice } from '@dataconnect/generated';


// Call the `deleteNotice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteNotice();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteNotice(dataConnect);

console.log(data.notice_delete);

// Or, you can use the `Promise` API.
deleteNotice().then((response) => {
  const data = response.data;
  console.log(data.notice_delete);
});
```

### Using `DeleteNotice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteNoticeRef } from '@dataconnect/generated';


// Call the `deleteNoticeRef()` function to get a reference to the mutation.
const ref = deleteNoticeRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteNoticeRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.notice_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.notice_delete);
});
```

## CreateMaintenanceRequest
You can execute the `CreateMaintenanceRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMaintenanceRequest(): MutationPromise<CreateMaintenanceRequestData, undefined>;

interface CreateMaintenanceRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateMaintenanceRequestData, undefined>;
}
export const createMaintenanceRequestRef: CreateMaintenanceRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMaintenanceRequest(dc: DataConnect): MutationPromise<CreateMaintenanceRequestData, undefined>;

interface CreateMaintenanceRequestRef {
  ...
  (dc: DataConnect): MutationRef<CreateMaintenanceRequestData, undefined>;
}
export const createMaintenanceRequestRef: CreateMaintenanceRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMaintenanceRequestRef:
```typescript
const name = createMaintenanceRequestRef.operationName;
console.log(name);
```

### Variables
The `CreateMaintenanceRequest` mutation has no variables.
### Return Type
Recall that executing the `CreateMaintenanceRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMaintenanceRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMaintenanceRequestData {
  maintenanceRequest_insert: MaintenanceRequest_Key;
}
```
### Using `CreateMaintenanceRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMaintenanceRequest } from '@dataconnect/generated';


// Call the `createMaintenanceRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMaintenanceRequest();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMaintenanceRequest(dataConnect);

console.log(data.maintenanceRequest_insert);

// Or, you can use the `Promise` API.
createMaintenanceRequest().then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest_insert);
});
```

### Using `CreateMaintenanceRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMaintenanceRequestRef } from '@dataconnect/generated';


// Call the `createMaintenanceRequestRef()` function to get a reference to the mutation.
const ref = createMaintenanceRequestRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMaintenanceRequestRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.maintenanceRequest_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest_insert);
});
```

## UpdateMaintenanceRequest
You can execute the `UpdateMaintenanceRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMaintenanceRequest(): MutationPromise<UpdateMaintenanceRequestData, undefined>;

interface UpdateMaintenanceRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateMaintenanceRequestData, undefined>;
}
export const updateMaintenanceRequestRef: UpdateMaintenanceRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMaintenanceRequest(dc: DataConnect): MutationPromise<UpdateMaintenanceRequestData, undefined>;

interface UpdateMaintenanceRequestRef {
  ...
  (dc: DataConnect): MutationRef<UpdateMaintenanceRequestData, undefined>;
}
export const updateMaintenanceRequestRef: UpdateMaintenanceRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMaintenanceRequestRef:
```typescript
const name = updateMaintenanceRequestRef.operationName;
console.log(name);
```

### Variables
The `UpdateMaintenanceRequest` mutation has no variables.
### Return Type
Recall that executing the `UpdateMaintenanceRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMaintenanceRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMaintenanceRequestData {
  maintenanceRequest_update?: MaintenanceRequest_Key | null;
}
```
### Using `UpdateMaintenanceRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMaintenanceRequest } from '@dataconnect/generated';


// Call the `updateMaintenanceRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMaintenanceRequest();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMaintenanceRequest(dataConnect);

console.log(data.maintenanceRequest_update);

// Or, you can use the `Promise` API.
updateMaintenanceRequest().then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest_update);
});
```

### Using `UpdateMaintenanceRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMaintenanceRequestRef } from '@dataconnect/generated';


// Call the `updateMaintenanceRequestRef()` function to get a reference to the mutation.
const ref = updateMaintenanceRequestRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMaintenanceRequestRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.maintenanceRequest_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest_update);
});
```

## DeleteMaintenanceRequest
You can execute the `DeleteMaintenanceRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteMaintenanceRequest(): MutationPromise<DeleteMaintenanceRequestData, undefined>;

interface DeleteMaintenanceRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteMaintenanceRequestData, undefined>;
}
export const deleteMaintenanceRequestRef: DeleteMaintenanceRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteMaintenanceRequest(dc: DataConnect): MutationPromise<DeleteMaintenanceRequestData, undefined>;

interface DeleteMaintenanceRequestRef {
  ...
  (dc: DataConnect): MutationRef<DeleteMaintenanceRequestData, undefined>;
}
export const deleteMaintenanceRequestRef: DeleteMaintenanceRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteMaintenanceRequestRef:
```typescript
const name = deleteMaintenanceRequestRef.operationName;
console.log(name);
```

### Variables
The `DeleteMaintenanceRequest` mutation has no variables.
### Return Type
Recall that executing the `DeleteMaintenanceRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteMaintenanceRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteMaintenanceRequestData {
  maintenanceRequest_delete?: MaintenanceRequest_Key | null;
}
```
### Using `DeleteMaintenanceRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteMaintenanceRequest } from '@dataconnect/generated';


// Call the `deleteMaintenanceRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteMaintenanceRequest();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteMaintenanceRequest(dataConnect);

console.log(data.maintenanceRequest_delete);

// Or, you can use the `Promise` API.
deleteMaintenanceRequest().then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest_delete);
});
```

### Using `DeleteMaintenanceRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteMaintenanceRequestRef } from '@dataconnect/generated';


// Call the `deleteMaintenanceRequestRef()` function to get a reference to the mutation.
const ref = deleteMaintenanceRequestRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteMaintenanceRequestRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.maintenanceRequest_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.maintenanceRequest_delete);
});
```

## CreateComment
You can execute the `CreateComment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createComment(): MutationPromise<CreateCommentData, undefined>;

interface CreateCommentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCommentData, undefined>;
}
export const createCommentRef: CreateCommentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createComment(dc: DataConnect): MutationPromise<CreateCommentData, undefined>;

interface CreateCommentRef {
  ...
  (dc: DataConnect): MutationRef<CreateCommentData, undefined>;
}
export const createCommentRef: CreateCommentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCommentRef:
```typescript
const name = createCommentRef.operationName;
console.log(name);
```

### Variables
The `CreateComment` mutation has no variables.
### Return Type
Recall that executing the `CreateComment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCommentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCommentData {
  comment_insert: Comment_Key;
}
```
### Using `CreateComment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createComment } from '@dataconnect/generated';


// Call the `createComment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createComment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createComment(dataConnect);

console.log(data.comment_insert);

// Or, you can use the `Promise` API.
createComment().then((response) => {
  const data = response.data;
  console.log(data.comment_insert);
});
```

### Using `CreateComment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCommentRef } from '@dataconnect/generated';


// Call the `createCommentRef()` function to get a reference to the mutation.
const ref = createCommentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCommentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.comment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.comment_insert);
});
```

## UpdateComment
You can execute the `UpdateComment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateComment(): MutationPromise<UpdateCommentData, undefined>;

interface UpdateCommentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateCommentData, undefined>;
}
export const updateCommentRef: UpdateCommentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateComment(dc: DataConnect): MutationPromise<UpdateCommentData, undefined>;

interface UpdateCommentRef {
  ...
  (dc: DataConnect): MutationRef<UpdateCommentData, undefined>;
}
export const updateCommentRef: UpdateCommentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCommentRef:
```typescript
const name = updateCommentRef.operationName;
console.log(name);
```

### Variables
The `UpdateComment` mutation has no variables.
### Return Type
Recall that executing the `UpdateComment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCommentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCommentData {
  comment_update?: Comment_Key | null;
}
```
### Using `UpdateComment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateComment } from '@dataconnect/generated';


// Call the `updateComment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateComment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateComment(dataConnect);

console.log(data.comment_update);

// Or, you can use the `Promise` API.
updateComment().then((response) => {
  const data = response.data;
  console.log(data.comment_update);
});
```

### Using `UpdateComment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCommentRef } from '@dataconnect/generated';


// Call the `updateCommentRef()` function to get a reference to the mutation.
const ref = updateCommentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCommentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.comment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.comment_update);
});
```

## DeleteComment
You can execute the `DeleteComment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteComment(): MutationPromise<DeleteCommentData, undefined>;

interface DeleteCommentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteCommentData, undefined>;
}
export const deleteCommentRef: DeleteCommentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteComment(dc: DataConnect): MutationPromise<DeleteCommentData, undefined>;

interface DeleteCommentRef {
  ...
  (dc: DataConnect): MutationRef<DeleteCommentData, undefined>;
}
export const deleteCommentRef: DeleteCommentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCommentRef:
```typescript
const name = deleteCommentRef.operationName;
console.log(name);
```

### Variables
The `DeleteComment` mutation has no variables.
### Return Type
Recall that executing the `DeleteComment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCommentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCommentData {
  comment_delete?: Comment_Key | null;
}
```
### Using `DeleteComment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteComment } from '@dataconnect/generated';


// Call the `deleteComment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteComment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteComment(dataConnect);

console.log(data.comment_delete);

// Or, you can use the `Promise` API.
deleteComment().then((response) => {
  const data = response.data;
  console.log(data.comment_delete);
});
```

### Using `DeleteComment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCommentRef } from '@dataconnect/generated';


// Call the `deleteCommentRef()` function to get a reference to the mutation.
const ref = deleteCommentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCommentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.comment_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.comment_delete);
});
```

