/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MethodBase } from './MethodBase';

export type Exception = {
    message?: string | null;
    targetSite?: MethodBase;
    readonly data?: Record<string, any> | null;
    innerException?: Exception;
    helpLink?: string | null;
    source?: string | null;
    hResult?: number;
    readonly stackTrace?: string | null;
};