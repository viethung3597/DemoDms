/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SortInfo } from './SortInfo';

export type DataLoadRequest = {
    pageSize?: number;
    currentPage?: number;
    searchTerm?: string | null;
    sorts?: Array<SortInfo> | null;
};