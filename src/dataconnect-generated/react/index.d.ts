import { CreateUserData, UpdateUserData, DeleteUserData, GetCurrentUserData, ListUsersData, CreateCategoryData, UpdateCategoryData, DeleteCategoryData, GetCategoryData, ListCategoriesData, CreateNoticeData, UpdateNoticeData, DeleteNoticeData, GetNoticeData, ListNoticesData, CreateMaintenanceRequestData, UpdateMaintenanceRequestData, DeleteMaintenanceRequestData, GetMaintenanceRequestData, ListMyMaintenanceRequestsData, CreateCommentData, UpdateCommentData, DeleteCommentData, GetCommentData, ListCommentsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetCurrentUser(options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;
export function useGetCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, void>): UseDataConnectMutationResult<CreateCategoryData, undefined>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, void>): UseDataConnectMutationResult<CreateCategoryData, undefined>;

export function useUpdateCategory(options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, void>): UseDataConnectMutationResult<UpdateCategoryData, undefined>;
export function useUpdateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, void>): UseDataConnectMutationResult<UpdateCategoryData, undefined>;

export function useDeleteCategory(options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, void>): UseDataConnectMutationResult<DeleteCategoryData, undefined>;
export function useDeleteCategory(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, void>): UseDataConnectMutationResult<DeleteCategoryData, undefined>;

export function useGetCategory(options?: useDataConnectQueryOptions<GetCategoryData>): UseDataConnectQueryResult<GetCategoryData, undefined>;
export function useGetCategory(dc: DataConnect, options?: useDataConnectQueryOptions<GetCategoryData>): UseDataConnectQueryResult<GetCategoryData, undefined>;

export function useListCategories(options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, undefined>;
export function useListCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, undefined>;

export function useCreateNotice(options?: useDataConnectMutationOptions<CreateNoticeData, FirebaseError, void>): UseDataConnectMutationResult<CreateNoticeData, undefined>;
export function useCreateNotice(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNoticeData, FirebaseError, void>): UseDataConnectMutationResult<CreateNoticeData, undefined>;

export function useUpdateNotice(options?: useDataConnectMutationOptions<UpdateNoticeData, FirebaseError, void>): UseDataConnectMutationResult<UpdateNoticeData, undefined>;
export function useUpdateNotice(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateNoticeData, FirebaseError, void>): UseDataConnectMutationResult<UpdateNoticeData, undefined>;

export function useDeleteNotice(options?: useDataConnectMutationOptions<DeleteNoticeData, FirebaseError, void>): UseDataConnectMutationResult<DeleteNoticeData, undefined>;
export function useDeleteNotice(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteNoticeData, FirebaseError, void>): UseDataConnectMutationResult<DeleteNoticeData, undefined>;

export function useGetNotice(options?: useDataConnectQueryOptions<GetNoticeData>): UseDataConnectQueryResult<GetNoticeData, undefined>;
export function useGetNotice(dc: DataConnect, options?: useDataConnectQueryOptions<GetNoticeData>): UseDataConnectQueryResult<GetNoticeData, undefined>;

export function useListNotices(options?: useDataConnectQueryOptions<ListNoticesData>): UseDataConnectQueryResult<ListNoticesData, undefined>;
export function useListNotices(dc: DataConnect, options?: useDataConnectQueryOptions<ListNoticesData>): UseDataConnectQueryResult<ListNoticesData, undefined>;

export function useCreateMaintenanceRequest(options?: useDataConnectMutationOptions<CreateMaintenanceRequestData, FirebaseError, void>): UseDataConnectMutationResult<CreateMaintenanceRequestData, undefined>;
export function useCreateMaintenanceRequest(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMaintenanceRequestData, FirebaseError, void>): UseDataConnectMutationResult<CreateMaintenanceRequestData, undefined>;

export function useUpdateMaintenanceRequest(options?: useDataConnectMutationOptions<UpdateMaintenanceRequestData, FirebaseError, void>): UseDataConnectMutationResult<UpdateMaintenanceRequestData, undefined>;
export function useUpdateMaintenanceRequest(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMaintenanceRequestData, FirebaseError, void>): UseDataConnectMutationResult<UpdateMaintenanceRequestData, undefined>;

export function useDeleteMaintenanceRequest(options?: useDataConnectMutationOptions<DeleteMaintenanceRequestData, FirebaseError, void>): UseDataConnectMutationResult<DeleteMaintenanceRequestData, undefined>;
export function useDeleteMaintenanceRequest(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteMaintenanceRequestData, FirebaseError, void>): UseDataConnectMutationResult<DeleteMaintenanceRequestData, undefined>;

export function useGetMaintenanceRequest(options?: useDataConnectQueryOptions<GetMaintenanceRequestData>): UseDataConnectQueryResult<GetMaintenanceRequestData, undefined>;
export function useGetMaintenanceRequest(dc: DataConnect, options?: useDataConnectQueryOptions<GetMaintenanceRequestData>): UseDataConnectQueryResult<GetMaintenanceRequestData, undefined>;

export function useListMyMaintenanceRequests(options?: useDataConnectQueryOptions<ListMyMaintenanceRequestsData>): UseDataConnectQueryResult<ListMyMaintenanceRequestsData, undefined>;
export function useListMyMaintenanceRequests(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyMaintenanceRequestsData>): UseDataConnectQueryResult<ListMyMaintenanceRequestsData, undefined>;

export function useCreateComment(options?: useDataConnectMutationOptions<CreateCommentData, FirebaseError, void>): UseDataConnectMutationResult<CreateCommentData, undefined>;
export function useCreateComment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCommentData, FirebaseError, void>): UseDataConnectMutationResult<CreateCommentData, undefined>;

export function useUpdateComment(options?: useDataConnectMutationOptions<UpdateCommentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateCommentData, undefined>;
export function useUpdateComment(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCommentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateCommentData, undefined>;

export function useDeleteComment(options?: useDataConnectMutationOptions<DeleteCommentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteCommentData, undefined>;
export function useDeleteComment(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCommentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteCommentData, undefined>;

export function useGetComment(options?: useDataConnectQueryOptions<GetCommentData>): UseDataConnectQueryResult<GetCommentData, undefined>;
export function useGetComment(dc: DataConnect, options?: useDataConnectQueryOptions<GetCommentData>): UseDataConnectQueryResult<GetCommentData, undefined>;

export function useListComments(options?: useDataConnectQueryOptions<ListCommentsData>): UseDataConnectQueryResult<ListCommentsData, undefined>;
export function useListComments(dc: DataConnect, options?: useDataConnectQueryOptions<ListCommentsData>): UseDataConnectQueryResult<ListCommentsData, undefined>;
