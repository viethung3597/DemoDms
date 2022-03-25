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

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiApiAccountLoginPostRequest {
    /**
     * 
     * @type LoginModel
     * @memberof AccountApiapiAccountLoginPost
     */
    loginModel?: LoginModel
}

export interface AccountApiApiAccountLogoutPostRequest {
}

export interface AccountApiApiAccountProfileGetRequest {
}

export interface AccountApiApiAccountResetPasswordPostRequest {
    /**
     * 
     * @type ResetPasswordModel
     * @memberof AccountApiapiAccountResetPasswordPost
     */
    resetPasswordModel?: ResetPasswordModel
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiAccountLoginPost(param: AccountApiApiAccountLoginPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiAccountLoginPost(param.loginModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAccountLogoutPost(param: AccountApiApiAccountLogoutPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiAccountLogoutPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAccountProfileGet(param: AccountApiApiAccountProfileGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiAccountProfileGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAccountResetPasswordPost(param: AccountApiApiAccountResetPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiAccountResetPasswordPost(param.resetPasswordModel,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiApiProductsActionGetRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiapiProductsActionGet
     */
    search?: string
    /**
     * 
     * @type number
     * @memberof ProductsApiapiProductsActionGet
     */
    pageIndex?: number
    /**
     * 
     * @type number
     * @memberof ProductsApiapiProductsActionGet
     */
    pageSize?: number
}

export interface ProductsApiApiProductsGetRequest {
}

export interface ProductsApiApiProductsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ProductsApiapiProductsIdDelete
     */
    id: number
}

export interface ProductsApiApiProductsPostRequest {
    /**
     * 
     * @type ProductModel
     * @memberof ProductsApiapiProductsPost
     */
    productModel?: ProductModel
}

export interface ProductsApiApiProductsPutRequest {
    /**
     * 
     * @type ProductModel
     * @memberof ProductsApiapiProductsPut
     */
    productModel?: ProductModel
}

export interface ProductsApiApiProductsSearchGetRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiapiProductsSearchGet
     */
    search: string
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiProductsActionGet(param: ProductsApiApiProductsActionGetRequest = {}, options?: Configuration): Promise<Array<Product>> {
        return this.api.apiProductsActionGet(param.search, param.pageIndex, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProductsGet(param: ProductsApiApiProductsGetRequest = {}, options?: Configuration): Promise<Array<Product>> {
        return this.api.apiProductsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProductsIdDelete(param: ProductsApiApiProductsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiProductsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProductsPost(param: ProductsApiApiProductsPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiProductsPost(param.productModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProductsPut(param: ProductsApiApiProductsPutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiProductsPut(param.productModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProductsSearchGet(param: ProductsApiApiProductsSearchGetRequest, options?: Configuration): Promise<Array<Product>> {
        return this.api.apiProductsSearchGet(param.search,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiApiUsersDeleteRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiapiUsersDelete
     */
    key?: string
}

export interface UsersApiApiUsersGetRequest {
    /**
     * 
     * @type DataLoadRequest
     * @memberof UsersApiapiUsersGet
     */
    dataLoadRequest?: DataLoadRequest
}

export interface UsersApiApiUsersPostRequest {
    /**
     * 
     * @type UserCreateModel
     * @memberof UsersApiapiUsersPost
     */
    userCreateModel?: UserCreateModel
}

export interface UsersApiApiUsersPutRequest {
    /**
     * 
     * @type UserUpdateModel
     * @memberof UsersApiapiUsersPut
     */
    userUpdateModel?: UserUpdateModel
}

export interface UsersApiApiUsersSetPasswordPostRequest {
    /**
     * 
     * @type SetPasswordModel
     * @memberof UsersApiapiUsersSetPasswordPost
     */
    setPasswordModel?: SetPasswordModel
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiUsersDelete(param: UsersApiApiUsersDeleteRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiUsersDelete(param.key,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersGet(param: UsersApiApiUsersGetRequest = {}, options?: Configuration): Promise<UserViewModelDataLoadResult> {
        return this.api.apiUsersGet(param.dataLoadRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPost(param: UsersApiApiUsersPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiUsersPost(param.userCreateModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPut(param: UsersApiApiUsersPutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiUsersPut(param.userUpdateModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersSetPasswordPost(param: UsersApiApiUsersSetPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiUsersSetPasswordPost(param.setPasswordModel,  options).toPromise();
    }

}

import { ObservableWeatherForecastApi } from "./ObservableAPI";
import { WeatherForecastApiRequestFactory, WeatherForecastApiResponseProcessor} from "../apis/WeatherForecastApi";

export interface WeatherForecastApiApiWeatherForecastGetRequest {
}

export class ObjectWeatherForecastApi {
    private api: ObservableWeatherForecastApi

    public constructor(configuration: Configuration, requestFactory?: WeatherForecastApiRequestFactory, responseProcessor?: WeatherForecastApiResponseProcessor) {
        this.api = new ObservableWeatherForecastApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiWeatherForecastGet(param: WeatherForecastApiApiWeatherForecastGetRequest = {}, options?: Configuration): Promise<Array<WeatherForecast>> {
        return this.api.apiWeatherForecastGet( options).toPromise();
    }

}
