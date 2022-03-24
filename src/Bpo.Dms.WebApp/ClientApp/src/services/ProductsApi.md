# .ProductsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProductsActionGet**](ProductsApi.md#apiProductsActionGet) | **GET** /api/Products/action | 
[**apiProductsGet**](ProductsApi.md#apiProductsGet) | **GET** /api/Products | 
[**apiProductsIdDelete**](ProductsApi.md#apiProductsIdDelete) | **DELETE** /api/Products/{id} | 
[**apiProductsPost**](ProductsApi.md#apiProductsPost) | **POST** /api/Products | 
[**apiProductsPut**](ProductsApi.md#apiProductsPut) | **PUT** /api/Products | 
[**apiProductsSearchGet**](ProductsApi.md#apiProductsSearchGet) | **GET** /api/Products/{search} | 


# **apiProductsActionGet**
> Array<Product> apiProductsActionGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiApiProductsActionGetRequest = {
  // string (optional)
  search: "search_example",
  // number (optional)
  pageIndex: 1,
  // number (optional)
  pageSize: 1,
};

apiInstance.apiProductsActionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**string**] |  | (optional) defaults to undefined
 **pageIndex** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<Product>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProductsGet**
> Array<Product> apiProductsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:any = {};

apiInstance.apiProductsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Product>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProductsIdDelete**
> void apiProductsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiApiProductsIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.apiProductsIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProductsPost**
> void apiProductsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiApiProductsPostRequest = {
  // ProductModel (optional)
  productModel: {
    id: 1,
    code: "code_example",
    name: "name_example",
    productType: 0,
    description: "description_example",
    price: 3.14,
    importDate: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.apiProductsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productModel** | **ProductModel**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProductsPut**
> void apiProductsPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiApiProductsPutRequest = {
  // ProductModel (optional)
  productModel: {
    id: 1,
    code: "code_example",
    name: "name_example",
    productType: 0,
    description: "description_example",
    price: 3.14,
    importDate: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.apiProductsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productModel** | **ProductModel**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProductsSearchGet**
> Array<Product> apiProductsSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiApiProductsSearchGetRequest = {
  // string
  search: "search_example",
};

apiInstance.apiProductsSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**string**] |  | defaults to undefined


### Return type

**Array<Product>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


