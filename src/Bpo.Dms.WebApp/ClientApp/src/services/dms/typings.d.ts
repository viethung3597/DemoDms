declare namespace API {
  type LoginModel = {
    userName: string;
    password: string;
    rememberMe?: boolean;
  };

  type ResetPasswordModel = {
    oldPassword: string;
    password: string;
    confirmPassword?: string;
  };

  type SetPasswordModel = {
    id: string;
    password: string;
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
