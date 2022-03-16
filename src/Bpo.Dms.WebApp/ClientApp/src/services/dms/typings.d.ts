declare namespace API {
  type DataLoadRequest = {
    pageSize?: number;
    currentPage?: number;
    searchTerm?: string;
    sorts?: SortInfo[];
  };

  type LoginModel = {
    userName: string;
    password: string;
    rememberMe?: boolean;
  };

  type Product = {
    id?: number;
    code?: string;
    name?: string;
    productType?: ProductType;
    description?: string;
    price?: number;
    importDate?: string;
  };

  type ProductModel = {
    id: number;
    code: string;
    name: string;
    productType: ProductType;
    description: string;
    price: number;
    importDate: string;
  };

  type ProductType = 0 | 1 | 2;

  type ResetPasswordModel = {
    oldPassword: string;
    password: string;
    confirmPassword?: string;
  };

  type SetPasswordModel = {
    id: string;
    password: string;
  };

  type SortInfo = {
    name?: string;
    isDesc?: boolean;
  };

  type UserCreateModel = {
    userName: string;
    displayName?: string;
    email: string;
    password: string;
  };

  type UserUpdateModel = {
    id: string;
    userName: string;
    displayName?: string;
    email: string;
  };

  type UserViewModel = {
    id?: string;
    userName?: string;
    displayName?: string;
    email?: string;
    permissions?: string;
  };

  type UserViewModelDataLoadResult = {
    data?: UserViewModel[];
    success?: boolean;
    page?: number;
    total?: number;
  };

  type WeatherForecast = {
    date?: string;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string;
  };

  type undefinedParams = {
    key?: string;
  };
}
