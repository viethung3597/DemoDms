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

/** 此处后端没有提供注释 PUT /api/Products */
export async function putProducts(body: API.ProductModel, options?: { [key: string]: any }) {
  return request<any>('/api/Products', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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

/** 此处后端没有提供注释 GET /api/Products/search/${param0} */
export async function getProductsSearchBySearch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { search: param0, ...queryParams } = params;
  return request<API.Product[]>(`/api/Products/search/${params}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Products/action */
export async function getProductsAction(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Product[]>('/api/Products/action', {
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
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  console.log(param0);
  
  return request<any>(`/api/Products/${params}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
