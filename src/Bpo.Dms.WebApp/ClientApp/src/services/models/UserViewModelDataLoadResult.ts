/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserViewModel } from './UserViewModel';

export type UserViewModelDataLoadResult = {
    data?: Array<UserViewModel> | null;
    success?: boolean;
    page?: number;
    total?: number;
};