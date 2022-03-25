/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from '../models/Product';
import type { ProductList } from '../models/ProductList';
import type { ProductModel } from '../models/ProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * @returns Product Success
     * @throws ApiError
     */
    public static getApiProducts(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Products',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static patchApiProducts(
requestBody?: ProductModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/Products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiProducts(
requestBody?: ProductModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param search 
     * @returns Product Success
     * @throws ApiError
     */
    public static getApiProducts1(
search: string,
): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Products/{search}',
            path: {
                'search': search,
            },
        });
    }

    /**
     * @param search 
     * @param sort 
     * @param pageIndex 
     * @param pageSize 
     * @returns ProductList Success
     * @throws ApiError
     */
    public static getApiProductsAction(
search?: string,
sort?: string,
pageIndex?: number,
pageSize?: number,
): CancelablePromise<Array<ProductList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Products/action',
            query: {
                'search': search,
                'sort': sort,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiProducts(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Products/{id}',
            path: {
                'id': id,
            },
        });
    }

}