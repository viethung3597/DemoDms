/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
    
    /**
     * Representation of the 'ResetPasswordModel' schema.
     */
    export type ResetPasswordModel = {
      'oldPassword': string;
      /**
       * Format: "password".
       * Max Length: 100.
       * Min Length: 6.
       */
      'password': string;
      /**
       * Format: "password".
       */
      'confirmPassword'?: string;
    };
