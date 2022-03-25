/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { DataLoadRequest, UserViewModelDataLoadResult, UserUpdateModel, UserCreateModel, SetPasswordModel } from './schema';
/**
 * Representation of the 'UsersApi'.
 * This API is part of the 'openapi' service.
 */
export const UsersApi = {
  /**
   * Create a request builder for execution of get requests to the '/api/Users' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getApiUsers: (body: DataLoadRequest | any | undefined) => new OpenApiRequestBuilder<UserViewModelDataLoadResult | any>(
    'get',
    '/api/Users',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of put requests to the '/api/Users' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateApiUsers: (body: UserUpdateModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'put',
    '/api/Users',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of post requests to the '/api/Users' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createApiUsers: (body: UserCreateModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'post',
    '/api/Users',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of delete requests to the '/api/Users' endpoint.
   * @param queryParameters - Object containing the following keys: key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteApiUsers: (queryParameters?: {'key'?: string}) => new OpenApiRequestBuilder<any>(
    'delete',
    '/api/Users',
    {
          queryParameters
        }
  ),
  /**
   * Create a request builder for execution of post requests to the '/api/Users/SetPassword' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createApiUsersSetPassword: (body: SetPasswordModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'post',
    '/api/Users/SetPassword',
    {
          body
        }
  )
};
