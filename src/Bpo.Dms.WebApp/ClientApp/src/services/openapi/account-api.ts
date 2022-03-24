/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { ResetPasswordModel, LoginModel } from './schema';
/**
 * Representation of the 'AccountApi'.
 * This API is part of the 'openapi' service.
 */
export const AccountApi = {
  /**
   * Create a request builder for execution of get requests to the '/api/Account/profile' endpoint.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getApiAccountProfile: () => new OpenApiRequestBuilder<any>(
    'get',
    '/api/Account/profile'
  ),
  /**
   * Create a request builder for execution of post requests to the '/api/Account/reset-password' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createApiAccountResetPassword: (body: ResetPasswordModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'post',
    '/api/Account/reset-password',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of post requests to the '/api/Account/login' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createApiAccountLogin: (body: LoginModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'post',
    '/api/Account/login',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of post requests to the '/api/Account/logout' endpoint.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createApiAccountLogout: () => new OpenApiRequestBuilder<any>(
    'post',
    '/api/Account/logout'
  )
};
