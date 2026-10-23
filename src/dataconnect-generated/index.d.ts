import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface Comment_Key {
  id: UUIDString;
  __typename?: 'Comment_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCommentData {
  comment_insert: Comment_Key;
}

export interface CreateMaintenanceRequestData {
  maintenanceRequest_insert: MaintenanceRequest_Key;
}

export interface CreateNoticeData {
  notice_insert: Notice_Key;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}

export interface DeleteCommentData {
  comment_delete?: Comment_Key | null;
}

export interface DeleteMaintenanceRequestData {
  maintenanceRequest_delete?: MaintenanceRequest_Key | null;
}

export interface DeleteNoticeData {
  notice_delete?: Notice_Key | null;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface GetCategoryData {
  category?: {
    name: string;
  };
}

export interface GetCommentData {
  comment?: {
    text: string;
  };
}

export interface GetCurrentUserData {
  user?: {
    username: string;
    email: string;
    role: string;
  };
}

export interface GetMaintenanceRequestData {
  maintenanceRequest?: {
    description: string;
    status: string;
  };
}

export interface GetNoticeData {
  notice?: {
    title: string;
    content: string;
  };
}

export interface ListCategoriesData {
  categories: ({
    name: string;
  })[];
}

export interface ListCommentsData {
  comments: ({
    text: string;
  })[];
}

export interface ListMyMaintenanceRequestsData {
  maintenanceRequests: ({
    description: string;
    status: string;
  })[];
}

export interface ListNoticesData {
  notices: ({
    title: string;
  })[];
}

export interface ListUsersData {
  users: ({
    username: string;
    email: string;
  })[];
}

export interface MaintenanceRequest_Key {
  id: UUIDString;
  __typename?: 'MaintenanceRequest_Key';
}

export interface Notice_Key {
  id: UUIDString;
  __typename?: 'Notice_Key';
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCommentData {
  comment_update?: Comment_Key | null;
}

export interface UpdateMaintenanceRequestData {
  maintenanceRequest_update?: MaintenanceRequest_Key | null;
}

export interface UpdateNoticeData {
  notice_update?: Notice_Key | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(): MutationPromise<UpdateUserData, undefined>;
export function updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCurrentUserData, undefined>;
  operationName: string;
}
export const getCurrentUserRef: GetCurrentUserRef;

export function getCurrentUser(options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;
export function getCurrentUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCategoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateCategoryData, undefined>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(): MutationPromise<CreateCategoryData, undefined>;
export function createCategory(dc: DataConnect): MutationPromise<CreateCategoryData, undefined>;

interface UpdateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateCategoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateCategoryData, undefined>;
  operationName: string;
}
export const updateCategoryRef: UpdateCategoryRef;

export function updateCategory(): MutationPromise<UpdateCategoryData, undefined>;
export function updateCategory(dc: DataConnect): MutationPromise<UpdateCategoryData, undefined>;

interface DeleteCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteCategoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteCategoryData, undefined>;
  operationName: string;
}
export const deleteCategoryRef: DeleteCategoryRef;

export function deleteCategory(): MutationPromise<DeleteCategoryData, undefined>;
export function deleteCategory(dc: DataConnect): MutationPromise<DeleteCategoryData, undefined>;

interface GetCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCategoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCategoryData, undefined>;
  operationName: string;
}
export const getCategoryRef: GetCategoryRef;

export function getCategory(options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, undefined>;
export function getCategory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, undefined>;

interface ListCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCategoriesData, undefined>;
  operationName: string;
}
export const listCategoriesRef: ListCategoriesRef;

export function listCategories(options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;
export function listCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface CreateNoticeRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNoticeData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateNoticeData, undefined>;
  operationName: string;
}
export const createNoticeRef: CreateNoticeRef;

export function createNotice(): MutationPromise<CreateNoticeData, undefined>;
export function createNotice(dc: DataConnect): MutationPromise<CreateNoticeData, undefined>;

interface UpdateNoticeRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateNoticeData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateNoticeData, undefined>;
  operationName: string;
}
export const updateNoticeRef: UpdateNoticeRef;

export function updateNotice(): MutationPromise<UpdateNoticeData, undefined>;
export function updateNotice(dc: DataConnect): MutationPromise<UpdateNoticeData, undefined>;

interface DeleteNoticeRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteNoticeData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteNoticeData, undefined>;
  operationName: string;
}
export const deleteNoticeRef: DeleteNoticeRef;

export function deleteNotice(): MutationPromise<DeleteNoticeData, undefined>;
export function deleteNotice(dc: DataConnect): MutationPromise<DeleteNoticeData, undefined>;

interface GetNoticeRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetNoticeData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetNoticeData, undefined>;
  operationName: string;
}
export const getNoticeRef: GetNoticeRef;

export function getNotice(options?: ExecuteQueryOptions): QueryPromise<GetNoticeData, undefined>;
export function getNotice(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetNoticeData, undefined>;

interface ListNoticesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListNoticesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListNoticesData, undefined>;
  operationName: string;
}
export const listNoticesRef: ListNoticesRef;

export function listNotices(options?: ExecuteQueryOptions): QueryPromise<ListNoticesData, undefined>;
export function listNotices(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListNoticesData, undefined>;

interface CreateMaintenanceRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateMaintenanceRequestData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateMaintenanceRequestData, undefined>;
  operationName: string;
}
export const createMaintenanceRequestRef: CreateMaintenanceRequestRef;

export function createMaintenanceRequest(): MutationPromise<CreateMaintenanceRequestData, undefined>;
export function createMaintenanceRequest(dc: DataConnect): MutationPromise<CreateMaintenanceRequestData, undefined>;

interface UpdateMaintenanceRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateMaintenanceRequestData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateMaintenanceRequestData, undefined>;
  operationName: string;
}
export const updateMaintenanceRequestRef: UpdateMaintenanceRequestRef;

export function updateMaintenanceRequest(): MutationPromise<UpdateMaintenanceRequestData, undefined>;
export function updateMaintenanceRequest(dc: DataConnect): MutationPromise<UpdateMaintenanceRequestData, undefined>;

interface DeleteMaintenanceRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteMaintenanceRequestData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteMaintenanceRequestData, undefined>;
  operationName: string;
}
export const deleteMaintenanceRequestRef: DeleteMaintenanceRequestRef;

export function deleteMaintenanceRequest(): MutationPromise<DeleteMaintenanceRequestData, undefined>;
export function deleteMaintenanceRequest(dc: DataConnect): MutationPromise<DeleteMaintenanceRequestData, undefined>;

interface GetMaintenanceRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMaintenanceRequestData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMaintenanceRequestData, undefined>;
  operationName: string;
}
export const getMaintenanceRequestRef: GetMaintenanceRequestRef;

export function getMaintenanceRequest(options?: ExecuteQueryOptions): QueryPromise<GetMaintenanceRequestData, undefined>;
export function getMaintenanceRequest(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMaintenanceRequestData, undefined>;

interface ListMyMaintenanceRequestsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyMaintenanceRequestsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyMaintenanceRequestsData, undefined>;
  operationName: string;
}
export const listMyMaintenanceRequestsRef: ListMyMaintenanceRequestsRef;

export function listMyMaintenanceRequests(options?: ExecuteQueryOptions): QueryPromise<ListMyMaintenanceRequestsData, undefined>;
export function listMyMaintenanceRequests(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyMaintenanceRequestsData, undefined>;

interface CreateCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCommentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateCommentData, undefined>;
  operationName: string;
}
export const createCommentRef: CreateCommentRef;

export function createComment(): MutationPromise<CreateCommentData, undefined>;
export function createComment(dc: DataConnect): MutationPromise<CreateCommentData, undefined>;

interface UpdateCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateCommentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateCommentData, undefined>;
  operationName: string;
}
export const updateCommentRef: UpdateCommentRef;

export function updateComment(): MutationPromise<UpdateCommentData, undefined>;
export function updateComment(dc: DataConnect): MutationPromise<UpdateCommentData, undefined>;

interface DeleteCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteCommentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteCommentData, undefined>;
  operationName: string;
}
export const deleteCommentRef: DeleteCommentRef;

export function deleteComment(): MutationPromise<DeleteCommentData, undefined>;
export function deleteComment(dc: DataConnect): MutationPromise<DeleteCommentData, undefined>;

interface GetCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCommentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCommentData, undefined>;
  operationName: string;
}
export const getCommentRef: GetCommentRef;

export function getComment(options?: ExecuteQueryOptions): QueryPromise<GetCommentData, undefined>;
export function getComment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCommentData, undefined>;

interface ListCommentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCommentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCommentsData, undefined>;
  operationName: string;
}
export const listCommentsRef: ListCommentsRef;

export function listComments(options?: ExecuteQueryOptions): QueryPromise<ListCommentsData, undefined>;
export function listComments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCommentsData, undefined>;

