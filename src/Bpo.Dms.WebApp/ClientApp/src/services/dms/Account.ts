// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Account/profile */
export async function getAccountProfile(options?: { [key: string]: any }) {
  return request<any>('/api/Account/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Account/reset-password */
export async function postAccountResetPassword(
  body: API.ResetPasswordModel,
  options?: { [key: string]: any },
) {
  return request<any>('/api/Account/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Account/login */
export async function postAccountLogin(body: API.LoginModel, options?: { [key: string]: any }) {
  return request<any>('/api/Account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Account/logout */
export async function postAccountLogout(options?: { [key: string]: any }) {
  return request<any>('/api/Account/logout', {
    method: 'POST',
    ...(options || {}),
  });
}
