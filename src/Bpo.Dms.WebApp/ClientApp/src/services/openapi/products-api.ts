/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Product, ProductModel } from './schema';
/**
 * Representation of the 'ProductsApi'.
 * This API is part of the 'openapi' service.
 */
export const ProductsApi = {
  /**
   * Create a request builder for execution of get requests to the '/api/Products' endpoint.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getApiProducts: () => new OpenApiRequestBuilder<Product[] | any>(
    'get',
    '/api/Products'
  ),
  /**
   * Create a request builder for execution of put requests to the '/api/Products' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateApiProducts: (body: ProductModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'put',
    '/api/Products',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of post requests to the '/api/Products' endpoint.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createApiProducts: (body: ProductModel | any | undefined) => new OpenApiRequestBuilder<any>(
    'post',
    '/api/Products',
    {
          body
        }
  ),
  /**
   * Create a request builder for execution of get requests to the '/api/Products/search/{search}' endpoint.
   * @param search - Path parameter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getApiProductsSearchBySearch: (search: string) => new OpenApiRequestBuilder<Product[] | any>(
    'get',
    '/api/Products/search/{search}',
    {
          pathParameters: { search }
        }
  ),
  /**
   * Create a request builder for execution of get requests to the '/api/Products/action' endpoint.
   * @param queryParameters - Object containing the following keys: search, pageIndex, pageSize.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getApiProductsAction: (queryParameters?: {'search'?: string,
  'pageIndex'?: number,
  'pageSize'?: number}) => new OpenApiRequestBuilder<Product[] | any>(
    'get',
    '/api/Products/action',
    {
          queryParameters
        }
  ),
  /**
   * Create a request builder for execution of delete requests to the '/api/Products/{id}' endpoint.
   * @param id - Path parameter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteApiProductsById: (id: string) => new OpenApiRequestBuilder<any>(
    'delete',
    '/api/Products/{id}',
    {
          pathParameters: { id }
        }
  )
};
