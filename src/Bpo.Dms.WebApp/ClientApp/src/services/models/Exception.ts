/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MethodBase } from './MethodBase';

export type Exception = {
    targetSite?: MethodBase;
    message?: string | null;
    readonly data?: Record<string, any> | null;
    innerException?: Exception;
    helpLink?: string | null;
    source?: string | null;
    hResult?: number;
    readonly stackTrace?: string | null;
};