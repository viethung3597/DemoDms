/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    import type { SortInfo } from './sort-info';
    /**
     * Representation of the 'DataLoadRequest' schema.
     */
    export type DataLoadRequest = {
      /**
       * Format: "int32".
       */
      'pageSize'?: number;
      /**
       * Format: "int32".
       */
      'currentPage'?: number;
      'searchTerm'?: string;
      'sorts'?: SortInfo[];
    };
