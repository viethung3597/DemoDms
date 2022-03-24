/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { WeatherForecast } from './schema';
/**
 * Representation of the 'WeatherForecastApi'.
 * This API is part of the 'openapi' service.
 */
export const WeatherForecastApi = {
  /**
   * Create a request builder for execution of get requests to the '/api/WeatherForecast' endpoint.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getApiWeatherForecast: () => new OpenApiRequestBuilder<WeatherForecast[] | any>(
    'get',
    '/api/WeatherForecast'
  )
};
