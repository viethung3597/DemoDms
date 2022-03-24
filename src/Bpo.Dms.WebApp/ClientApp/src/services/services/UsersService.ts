/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataLoadRequest } from '../models/DataLoadRequest';
import type { SetPasswordModel } from '../models/SetPasswordModel';
import type { UserCreateModel } from '../models/UserCreateModel';
import type { UserUpdateModel } from '../models/UserUpdateModel';
import type { UserViewModelDataLoadResult } from '../models/UserViewModelDataLoadResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody 
     * @returns UserViewModelDataLoadResult Success
     * @throws ApiError
     */
    public static getApiUsers(
requestBody?: DataLoadRequest,
): CancelablePromise<UserViewModelDataLoadResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiUsers(
requestBody?: UserUpdateModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiUsers(
requestBody?: UserCreateModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param key 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiUsers(
key?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Users',
            query: {
                'key': key,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiUsersSetPassword(
requestBody?: SetPasswordModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Users/SetPassword',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}