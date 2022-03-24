/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductType } from './ProductType';

export type ProductModel = {
    id: number;
    code: string;
    name: string;
    productType: ProductType;
    description: string;
    price: number;
    importDate: string;
};