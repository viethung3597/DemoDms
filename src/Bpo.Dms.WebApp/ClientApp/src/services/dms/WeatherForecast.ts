// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/WeatherForecast */
export async function getWeatherForecast(options?: { [key: string]: any }) {
  return request<API.WeatherForecast[]>('/api/WeatherForecast', {
    method: 'GET',
    ...(options || {}),
  });
}
