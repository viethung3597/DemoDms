// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Users */
export async function getUsers(options?: { [key: string]: any }) {
  return request<API.UserViewModelDataLoadResult>('/api/Users', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Users */
export async function putUsers(body: API.UserUpdateModel, options?: { [key: string]: any }) {
  return request<any>('/api/Users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Users */
export async function postUsers(body: API.UserCreateModel, options?: { [key: string]: any }) {
  return request<any>('/api/Users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/Users */
export async function deleteUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsersParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/Users', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Users/SetPassword */
export async function postUsersSetPassword(
  body: API.SetPasswordModel,
  options?: { [key: string]: any },
) {
  return request<any>('/api/Users/SetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
