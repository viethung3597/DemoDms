import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DataLoadRequest } from '../models/DataLoadRequest';
import { LoginModel } from '../models/LoginModel';
import { Product } from '../models/Product';
import { ProductModel } from '../models/ProductModel';
import { ProductType } from '../models/ProductType';
import { ResetPasswordModel } from '../models/ResetPasswordModel';
import { SetPasswordModel } from '../models/SetPasswordModel';
import { SortInfo } from '../models/SortInfo';
import { UserCreateModel } from '../models/UserCreateModel';
import { UserUpdateModel } from '../models/UserUpdateModel';
import { UserViewModel } from '../models/UserViewModel';
import { UserViewModelDataLoadResult } from '../models/UserViewModelDataLoadResult';
import { WeatherForecast } from '../models/WeatherForecast';
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param loginModel 
     */
    public apiAccountLoginPost(loginModel?: LoginModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiAccountLoginPost(loginModel, _options);
        return result.toPromise();
    }

    /**
     */
    public apiAccountLogoutPost(_options?: Configuration): Promise<void> {
        const result = this.api.apiAccountLogoutPost(_options);
        return result.toPromise();
    }

    /**
     */
    public apiAccountProfileGet(_options?: Configuration): Promise<void> {
        const result = this.api.apiAccountProfileGet(_options);
        return result.toPromise();
    }

    /**
     * @param resetPasswordModel 
     */
    public apiAccountResetPasswordPost(resetPasswordModel?: ResetPasswordModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiAccountResetPasswordPost(resetPasswordModel, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param search 
     * @param pageIndex 
     * @param pageSize 
     */
    public apiProductsActionGet(search?: string, pageIndex?: number, pageSize?: number, _options?: Configuration): Promise<Array<Product>> {
        const result = this.api.apiProductsActionGet(search, pageIndex, pageSize, _options);
        return result.toPromise();
    }

    /**
     */
    public apiProductsGet(_options?: Configuration): Promise<Array<Product>> {
        const result = this.api.apiProductsGet(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiProductsIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiProductsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param productModel 
     */
    public apiProductsPost(productModel?: ProductModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiProductsPost(productModel, _options);
        return result.toPromise();
    }

    /**
     * @param productModel 
     */
    public apiProductsPut(productModel?: ProductModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiProductsPut(productModel, _options);
        return result.toPromise();
    }

    /**
     * @param search 
     */
    public apiProductsSearchGet(search: string, _options?: Configuration): Promise<Array<Product>> {
        const result = this.api.apiProductsSearchGet(search, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param key 
     */
    public apiUsersDelete(key?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiUsersDelete(key, _options);
        return result.toPromise();
    }

    /**
     * @param dataLoadRequest 
     */
    public apiUsersGet(dataLoadRequest?: DataLoadRequest, _options?: Configuration): Promise<UserViewModelDataLoadResult> {
        const result = this.api.apiUsersGet(dataLoadRequest, _options);
        return result.toPromise();
    }

    /**
     * @param userCreateModel 
     */
    public apiUsersPost(userCreateModel?: UserCreateModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiUsersPost(userCreateModel, _options);
        return result.toPromise();
    }

    /**
     * @param userUpdateModel 
     */
    public apiUsersPut(userUpdateModel?: UserUpdateModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiUsersPut(userUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * @param setPasswordModel 
     */
    public apiUsersSetPasswordPost(setPasswordModel?: SetPasswordModel, _options?: Configuration): Promise<void> {
        const result = this.api.apiUsersSetPasswordPost(setPasswordModel, _options);
        return result.toPromise();
    }


}



import { ObservableWeatherForecastApi } from './ObservableAPI';

import { WeatherForecastApiRequestFactory, WeatherForecastApiResponseProcessor} from "../apis/WeatherForecastApi";
export class PromiseWeatherForecastApi {
    private api: ObservableWeatherForecastApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WeatherForecastApiRequestFactory,
        responseProcessor?: WeatherForecastApiResponseProcessor
    ) {
        this.api = new ObservableWeatherForecastApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiWeatherForecastGet(_options?: Configuration): Promise<Array<WeatherForecast>> {
        const result = this.api.apiWeatherForecastGet(_options);
        return result.toPromise();
    }


}



