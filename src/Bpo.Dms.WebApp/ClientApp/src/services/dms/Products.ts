// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Products */
export async function getProducts(options?: { [key: string]: any }) {
  return request<API.Product[]>('/api/Products', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Products */
export async function postProducts(body: API.ProductModel, options?: { [key: string]: any }) {
  return request<any>('/api/Products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /api/Products */
export async function patchProducts(body: API.ProductModel, options?: { [key: string]: any }) {
  return request<any>('/api/Products', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Products/${param0} */
export async function getProductsBySearch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductsBySearchParams,
  options?: { [key: string]: any },
) {
  const { search: param0, ...queryParams } = params;
  return request<API.Product[]>(`/api/Products/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Products/action */
export async function getProductsAction(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductsActionParams,
  options?: { [key: string]: any },
) {
  return request<API.ProductList[]>('/api/Products/action', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/Products/${param0} */
export async function deleteProductsById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProductsByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/Products/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
