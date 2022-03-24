/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exception } from './Exception';
import type { MethodBase } from './MethodBase';

export type AggregateException = {
    targetSite?: MethodBase;
    readonly data?: Record<string, any> | null;
    innerException?: Exception;
    helpLink?: string | null;
    source?: string | null;
    hResult?: number;
    readonly stackTrace?: string | null;
    innerExceptions?: Array<Exception> | null;
    message?: string | null;
};