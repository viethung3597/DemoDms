/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    import type { UserViewModel } from './user-view-model';
    /**
     * Representation of the 'UserViewModelDataLoadResult' schema.
     */
    export type UserViewModelDataLoadResult = {
      'data'?: UserViewModel[];
      'success'?: boolean;
      /**
       * Format: "int32".
       */
      'page'?: number;
      /**
       * Format: "int32".
       */
      'total'?: number;
    };
