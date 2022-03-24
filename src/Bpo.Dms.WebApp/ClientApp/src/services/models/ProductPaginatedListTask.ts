/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AggregateException } from './AggregateException';
import type { Product } from './Product';
import type { TaskCreationOptions } from './TaskCreationOptions';
import type { TaskStatus } from './TaskStatus';

export type ProductPaginatedListTask = {
    readonly id?: number;
    exception?: AggregateException;
    status?: TaskStatus;
    readonly isCanceled?: boolean;
    readonly isCompleted?: boolean;
    readonly isCompletedSuccessfully?: boolean;
    creationOptions?: TaskCreationOptions;
    readonly asyncState?: any;
    readonly isFaulted?: boolean;
    readonly result?: Array<Product> | null;
};