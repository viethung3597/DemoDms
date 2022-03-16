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

/** 此处后端没有提供注释 DELETE /api/Products */
export async function deleteProducts(body: API.ProductModel, options?: { [key: string]: any }) {
  return request<any>('/api/Products', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
