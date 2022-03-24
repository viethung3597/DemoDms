/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomAttributeData } from './CustomAttributeData';
import type { MemberTypes } from './MemberTypes';
import type { Module } from './Module';
import type { Type } from './Type';

export type MemberInfo = {
    memberType?: MemberTypes;
    declaringType?: Type;
    reflectedType?: Type;
    readonly name?: string | null;
    module?: Module;
    readonly customAttributes?: Array<CustomAttributeData> | null;
    readonly isCollectible?: boolean;
    readonly metadataToken?: number;
};