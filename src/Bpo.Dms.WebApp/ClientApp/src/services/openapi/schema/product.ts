/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    import type { ProductType } from './product-type';
    /**
     * Representation of the 'Product' schema.
     */
    export type Product = {
      /**
       * Format: "int32".
       */
      'id'?: number;
      'code'?: string;
      'name'?: string;
      'productType'?: ProductType;
      'description'?: string;
      /**
       * Format: "double".
       */
      'price'?: number;
      /**
       * Format: "date-time".
       */
      'importDate'?: string;
    };
