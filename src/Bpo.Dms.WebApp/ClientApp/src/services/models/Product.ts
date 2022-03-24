/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductType } from './ProductType';

export type Product = {
    id?: number;
    code?: string | null;
    name?: string | null;
    productType?: ProductType;
    description?: string | null;
    price?: number;
    importDate?: string;
};