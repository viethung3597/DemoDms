declare namespace API {
  type AggregateException = {
    targetSite?: MethodBase;
    data?: Record<string, any>;
    innerException?: Exception;
    helpLink?: string;
    source?: string;
    hResult?: number;
    stackTrace?: string;
    innerExceptions?: Exception[];
    message?: string;
  };

  type Assembly = {
    definedTypes?: TypeInfo[];
    exportedTypes?: Type[];
    codeBase?: string;
    entryPoint?: MethodInfo;
    fullName?: string;
    imageRuntimeVersion?: string;
    isDynamic?: boolean;
    location?: string;
    reflectionOnly?: boolean;
    isCollectible?: boolean;
    isFullyTrusted?: boolean;
    customAttributes?: CustomAttributeData[];
    escapedCodeBase?: string;
    manifestModule?: Module;
    modules?: Module[];
    globalAssemblyCache?: boolean;
    hostContext?: number;
    securityRuleSet?: SecurityRuleSet;
  };

  type CallingConventions = 1 | 2 | 3 | 32 | 64;

  type ConstructorInfo = {
    name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    attributes?: MethodAttributes;
    methodImplementationFlags?: MethodImplAttributes;
    callingConvention?: CallingConventions;
    isAbstract?: boolean;
    isConstructor?: boolean;
    isFinal?: boolean;
    isHideBySig?: boolean;
    isSpecialName?: boolean;
    isStatic?: boolean;
    isVirtual?: boolean;
    isAssembly?: boolean;
    isFamily?: boolean;
    isFamilyAndAssembly?: boolean;
    isFamilyOrAssembly?: boolean;
    isPrivate?: boolean;
    isPublic?: boolean;
    isConstructedGenericMethod?: boolean;
    isGenericMethod?: boolean;
    isGenericMethodDefinition?: boolean;
    containsGenericParameters?: boolean;
    methodHandle?: RuntimeMethodHandle;
    isSecurityCritical?: boolean;
    isSecuritySafeCritical?: boolean;
    isSecurityTransparent?: boolean;
    memberType?: MemberTypes;
  };

  type Coordinate = {
    x?: number;
    y?: number;
    z?: number;
    m?: number;
    coordinateValue?: Coordinate;
    isValid?: boolean;
  };

  type CoordinateEqualityComparer = true;

  type CoordinateSequence = {
    dimension?: number;
    measures?: number;
    spatial?: number;
    ordinates?: Ordinates;
    hasZ?: boolean;
    hasM?: boolean;
    zOrdinateIndex?: number;
    mOrdinateIndex?: number;
    first?: Coordinate;
    last?: Coordinate;
    count?: number;
  };

  type CoordinateSequenceFactory = Ordinates;

  type CustomAttributeData = {
    attributeType?: Type;
    constructor?: ConstructorInfo;
    constructorArguments?: CustomAttributeTypedArgument[];
    namedArguments?: CustomAttributeNamedArgument[];
  };

  type CustomAttributeNamedArgument = {
    memberInfo?: MemberInfo;
    typedValue?: CustomAttributeTypedArgument;
    memberName?: string;
    isField?: boolean;
  };

  type CustomAttributeTypedArgument = {
    argumentType?: Type;
    value?: any;
  };

  type DataLoadRequest = {
    pageSize?: number;
    currentPage?: number;
    searchTerm?: string;
    sorts?: SortInfo[];
  };

  type Dimension = 0 | 1 | 2 | 3 | -3 | -2 | -1;

  type Envelope = {
    isNull?: boolean;
    width?: number;
    height?: number;
    diameter?: number;
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
    area?: number;
    minExtent?: number;
    maxExtent?: number;
    centre?: Coordinate;
  };

  type EventAttributes = 0 | 512 | 1024;

  type EventInfo = {
    name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    memberType?: MemberTypes;
    attributes?: EventAttributes;
    isSpecialName?: boolean;
    addMethod?: MethodInfo;
    removeMethod?: MethodInfo;
    raiseMethod?: MethodInfo;
    isMulticast?: boolean;
    eventHandlerType?: Type;
  };

  type Exception = {
    message?: string;
    targetSite?: MethodBase;
    data?: Record<string, any>;
    innerException?: Exception;
    helpLink?: string;
    source?: string;
    hResult?: number;
    stackTrace?: string;
  };

  type FieldAttributes =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 16
    | 32
    | 64
    | 128
    | 256
    | 512
    | 1024
    | 4096
    | 8192
    | 32768
    | 38144;

  type FieldInfo = {
    name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    memberType?: MemberTypes;
    attributes?: FieldAttributes;
    fieldType?: Type;
    isInitOnly?: boolean;
    isLiteral?: boolean;
    isNotSerialized?: boolean;
    isPinvokeImpl?: boolean;
    isSpecialName?: boolean;
    isStatic?: boolean;
    isAssembly?: boolean;
    isFamily?: boolean;
    isFamilyAndAssembly?: boolean;
    isFamilyOrAssembly?: boolean;
    isPrivate?: boolean;
    isPublic?: boolean;
    isSecurityCritical?: boolean;
    isSecuritySafeCritical?: boolean;
    isSecurityTransparent?: boolean;
    fieldHandle?: RuntimeFieldHandle;
  };

  type GenericParameterAttributes = 0 | 1 | 2 | 3 | 4 | 8 | 16 | 28;

  type Geometry = {
    coordinates?: Coordinate[];
    numPoints?: number;
    isEmpty?: boolean;
    dimension?: Dimension;
    boundaryDimension?: Dimension;
    coordinate?: Coordinate;
    geometryType?: string;
    ogcGeometryType?: OgcGeometryType;
    boundary?: Geometry;
    factory?: GeometryFactory;
    userData?: any;
    srid?: number;
    precisionModel?: PrecisionModel;
    numGeometries?: number;
    isSimple?: boolean;
    isValid?: boolean;
    area?: number;
    length?: number;
    centroid?: Point;
    interiorPoint?: Point;
    pointOnSurface?: Point;
    envelope?: Geometry;
    envelopeInternal?: Envelope;
    isRectangle?: boolean;
  };

  type GeometryFactory = {
    precisionModel?: PrecisionModel;
    coordinateSequenceFactory?: CoordinateSequenceFactory;
    srid?: number;
    geometryServices?: NtsGeometryServices;
  };

  type GeometryOverlay = true;

  type ICustomAttributeProvider = true;

  type IntPtr = true;

  type LayoutKind = 0 | 2 | 3;

  type LoginModel = {
    userName: string;
    password: string;
    rememberMe?: boolean;
  };

  type MemberInfo = {
    memberType?: MemberTypes;
    declaringType?: Type;
    reflectedType?: Type;
    name?: string;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
  };

  type MemberTypes = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;

  type MethodAttributes =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 16
    | 32
    | 64
    | 128
    | 256
    | 512
    | 1024
    | 2048
    | 4096
    | 8192
    | 16384
    | 32768
    | 53248;

  type MethodBase = {
    memberType?: MemberTypes;
    name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    attributes?: MethodAttributes;
    methodImplementationFlags?: MethodImplAttributes;
    callingConvention?: CallingConventions;
    isAbstract?: boolean;
    isConstructor?: boolean;
    isFinal?: boolean;
    isHideBySig?: boolean;
    isSpecialName?: boolean;
    isStatic?: boolean;
    isVirtual?: boolean;
    isAssembly?: boolean;
    isFamily?: boolean;
    isFamilyAndAssembly?: boolean;
    isFamilyOrAssembly?: boolean;
    isPrivate?: boolean;
    isPublic?: boolean;
    isConstructedGenericMethod?: boolean;
    isGenericMethod?: boolean;
    isGenericMethodDefinition?: boolean;
    containsGenericParameters?: boolean;
    methodHandle?: RuntimeMethodHandle;
    isSecurityCritical?: boolean;
    isSecuritySafeCritical?: boolean;
    isSecurityTransparent?: boolean;
  };

  type MethodImplAttributes = 0 | 1 | 2 | 3 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 4096 | 65535;

  type MethodInfo = {
    name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    attributes?: MethodAttributes;
    methodImplementationFlags?: MethodImplAttributes;
    callingConvention?: CallingConventions;
    isAbstract?: boolean;
    isConstructor?: boolean;
    isFinal?: boolean;
    isHideBySig?: boolean;
    isSpecialName?: boolean;
    isStatic?: boolean;
    isVirtual?: boolean;
    isAssembly?: boolean;
    isFamily?: boolean;
    isFamilyAndAssembly?: boolean;
    isFamilyOrAssembly?: boolean;
    isPrivate?: boolean;
    isPublic?: boolean;
    isConstructedGenericMethod?: boolean;
    isGenericMethod?: boolean;
    isGenericMethodDefinition?: boolean;
    containsGenericParameters?: boolean;
    methodHandle?: RuntimeMethodHandle;
    isSecurityCritical?: boolean;
    isSecuritySafeCritical?: boolean;
    isSecurityTransparent?: boolean;
    memberType?: MemberTypes;
    returnParameter?: ParameterInfo;
    returnType?: Type;
    returnTypeCustomAttributes?: ICustomAttributeProvider;
  };

  type Module = {
    assembly?: Assembly;
    fullyQualifiedName?: string;
    name?: string;
    mdStreamVersion?: number;
    moduleVersionId?: string;
    scopeName?: string;
    moduleHandle?: ModuleHandle;
    customAttributes?: CustomAttributeData[];
    metadataToken?: number;
  };

  type ModuleHandle = {
    mdStreamVersion?: number;
  };

  type NtsGeometryServices = {
    geometryOverlay?: GeometryOverlay;
    coordinateEqualityComparer?: CoordinateEqualityComparer;
    defaultSRID?: number;
    defaultCoordinateSequenceFactory?: CoordinateSequenceFactory;
    defaultPrecisionModel?: PrecisionModel;
  };

  type OgcGeometryType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

  type Ordinates =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 7
    | 8
    | 16
    | 32
    | 64
    | 128
    | 256
    | 512
    | 1024
    | 2048
    | 4096
    | 8192
    | 16384
    | 32768
    | 65535
    | 65536
    | 65539
    | 65543
    | 131072
    | 262144
    | 524288
    | 1048576
    | 2097152
    | 4194304
    | 8388608
    | 16777216
    | 33554432
    | 67108864
    | 134217728
    | 268435456
    | 536870912
    | 1073741824
    | -2147483648
    | -65536
    | -1;

  type ParameterAttributes = 0 | 1 | 2 | 4 | 8 | 16 | 4096 | 8192 | 16384 | 32768 | 61440;

  type ParameterInfo = {
    attributes?: ParameterAttributes;
    member?: MemberInfo;
    name?: string;
    parameterType?: Type;
    position?: number;
    isIn?: boolean;
    isLcid?: boolean;
    isOptional?: boolean;
    isOut?: boolean;
    isRetval?: boolean;
    defaultValue?: any;
    rawDefaultValue?: any;
    hasDefaultValue?: boolean;
    customAttributes?: CustomAttributeData[];
    metadataToken?: number;
  };

  type Point = {
    factory?: GeometryFactory;
    userData?: any;
    srid?: number;
    precisionModel?: PrecisionModel;
    numGeometries?: number;
    isSimple?: boolean;
    isValid?: boolean;
    area?: number;
    length?: number;
    centroid?: Point;
    interiorPoint?: Point;
    pointOnSurface?: Point;
    envelope?: Geometry;
    envelopeInternal?: Envelope;
    isRectangle?: boolean;
    coordinateSequence?: CoordinateSequence;
    coordinates?: Coordinate[];
    numPoints?: number;
    isEmpty?: boolean;
    dimension?: Dimension;
    boundaryDimension?: Dimension;
    x?: number;
    y?: number;
    coordinate?: Coordinate;
    geometryType?: string;
    ogcGeometryType?: OgcGeometryType;
    boundary?: Geometry;
    z?: number;
    m?: number;
  };

  type PrecisionModel = {
    isFloating?: boolean;
    maximumSignificantDigits?: number;
    scale?: number;
    precisionModelType?: PrecisionModels;
  };

  type PrecisionModels = 0 | 1 | 2;

  type Product = {
    id?: number;
    code?: string;
    name?: string;
    productType?: ProductType;
    description?: string;
    price?: number;
    importDate?: string;
  };

  type ProductList = {
    totalItem?: number;
    content?: ProductPaginatedListTask;
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

  type ProductPaginatedListTask = {
    id?: number;
    exception?: AggregateException;
    status?: TaskStatus;
    isCanceled?: boolean;
    isCompleted?: boolean;
    isCompletedSuccessfully?: boolean;
    creationOptions?: TaskCreationOptions;
    asyncState?: any;
    isFaulted?: boolean;
    result?: Product[];
  };

  type ProductType = 0 | 1 | 2;

  type PropertyAttributes = 0 | 512 | 1024 | 4096 | 8192 | 16384 | 32768 | 62464;

  type PropertyInfo = {
    name?: string;
    declaringType?: Type;
    reflectedType?: Type;
    module?: Module;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    memberType?: MemberTypes;
    propertyType?: Type;
    attributes?: PropertyAttributes;
    isSpecialName?: boolean;
    canRead?: boolean;
    canWrite?: boolean;
    getMethod?: MethodInfo;
    setMethod?: MethodInfo;
  };

  type ResetPasswordModel = {
    oldPassword: string;
    password: string;
    confirmPassword?: string;
  };

  type RuntimeFieldHandle = IntPtr;

  type RuntimeMethodHandle = IntPtr;

  type RuntimeTypeHandle = IntPtr;

  type SecurityRuleSet = 0 | 1 | 2;

  type SetPasswordModel = {
    id: string;
    password: string;
  };

  type SortInfo = {
    name?: string;
    isDesc?: boolean;
  };

  type Store = {
    id?: number;
    code?: string;
    name?: string;
    country?: string;
    email?: string;
    numberPhone?: number;
    description?: string;
    location?: Point;
  };

  type StoreModel = {
    id?: number;
    code?: string;
    name?: string;
    country?: string;
    email?: string;
    numberPhone?: number;
    description?: string;
    location?: Point;
  };

  type StructLayoutAttribute = {
    typeId?: any;
    value?: LayoutKind;
  };

  type TaskCreationOptions = 0 | 1 | 2 | 4 | 8 | 16 | 64;

  type TaskStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

  type Type = {
    name?: string;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    isInterface?: boolean;
    memberType?: MemberTypes;
    namespace?: string;
    assemblyQualifiedName?: string;
    fullName?: string;
    assembly?: Assembly;
    module?: Module;
    isNested?: boolean;
    declaringType?: Type;
    declaringMethod?: MethodBase;
    reflectedType?: Type;
    underlyingSystemType?: Type;
    isTypeDefinition?: boolean;
    isArray?: boolean;
    isByRef?: boolean;
    isPointer?: boolean;
    isConstructedGenericType?: boolean;
    isGenericParameter?: boolean;
    isGenericTypeParameter?: boolean;
    isGenericMethodParameter?: boolean;
    isGenericType?: boolean;
    isGenericTypeDefinition?: boolean;
    isSZArray?: boolean;
    isVariableBoundArray?: boolean;
    isByRefLike?: boolean;
    hasElementType?: boolean;
    genericTypeArguments?: Type[];
    genericParameterPosition?: number;
    genericParameterAttributes?: GenericParameterAttributes;
    attributes?: TypeAttributes;
    isAbstract?: boolean;
    isImport?: boolean;
    isSealed?: boolean;
    isSpecialName?: boolean;
    isClass?: boolean;
    isNestedAssembly?: boolean;
    isNestedFamANDAssem?: boolean;
    isNestedFamily?: boolean;
    isNestedFamORAssem?: boolean;
    isNestedPrivate?: boolean;
    isNestedPublic?: boolean;
    isNotPublic?: boolean;
    isPublic?: boolean;
    isAutoLayout?: boolean;
    isExplicitLayout?: boolean;
    isLayoutSequential?: boolean;
    isAnsiClass?: boolean;
    isAutoClass?: boolean;
    isUnicodeClass?: boolean;
    isCOMObject?: boolean;
    isContextful?: boolean;
    isEnum?: boolean;
    isMarshalByRef?: boolean;
    isPrimitive?: boolean;
    isValueType?: boolean;
    isSignatureType?: boolean;
    isSecurityCritical?: boolean;
    isSecuritySafeCritical?: boolean;
    isSecurityTransparent?: boolean;
    structLayoutAttribute?: StructLayoutAttribute;
    typeInitializer?: ConstructorInfo;
    typeHandle?: RuntimeTypeHandle;
    guid?: string;
    baseType?: Type;
    isSerializable?: boolean;
    containsGenericParameters?: boolean;
    isVisible?: boolean;
  };

  type TypeAttributes =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 16
    | 24
    | 32
    | 128
    | 256
    | 1024
    | 2048
    | 4096
    | 8192
    | 16384
    | 65536
    | 131072
    | 196608
    | 262144
    | 264192
    | 1048576
    | 12582912;

  type TypeInfo = {
    name?: string;
    customAttributes?: CustomAttributeData[];
    isCollectible?: boolean;
    metadataToken?: number;
    isInterface?: boolean;
    memberType?: MemberTypes;
    namespace?: string;
    assemblyQualifiedName?: string;
    fullName?: string;
    assembly?: Assembly;
    module?: Module;
    isNested?: boolean;
    declaringType?: Type;
    declaringMethod?: MethodBase;
    reflectedType?: Type;
    underlyingSystemType?: Type;
    isTypeDefinition?: boolean;
    isArray?: boolean;
    isByRef?: boolean;
    isPointer?: boolean;
    isConstructedGenericType?: boolean;
    isGenericParameter?: boolean;
    isGenericTypeParameter?: boolean;
    isGenericMethodParameter?: boolean;
    isGenericType?: boolean;
    isGenericTypeDefinition?: boolean;
    isSZArray?: boolean;
    isVariableBoundArray?: boolean;
    isByRefLike?: boolean;
    hasElementType?: boolean;
    genericTypeArguments?: Type[];
    genericParameterPosition?: number;
    genericParameterAttributes?: GenericParameterAttributes;
    attributes?: TypeAttributes;
    isAbstract?: boolean;
    isImport?: boolean;
    isSealed?: boolean;
    isSpecialName?: boolean;
    isClass?: boolean;
    isNestedAssembly?: boolean;
    isNestedFamANDAssem?: boolean;
    isNestedFamily?: boolean;
    isNestedFamORAssem?: boolean;
    isNestedPrivate?: boolean;
    isNestedPublic?: boolean;
    isNotPublic?: boolean;
    isPublic?: boolean;
    isAutoLayout?: boolean;
    isExplicitLayout?: boolean;
    isLayoutSequential?: boolean;
    isAnsiClass?: boolean;
    isAutoClass?: boolean;
    isUnicodeClass?: boolean;
    isCOMObject?: boolean;
    isContextful?: boolean;
    isEnum?: boolean;
    isMarshalByRef?: boolean;
    isPrimitive?: boolean;
    isValueType?: boolean;
    isSignatureType?: boolean;
    isSecurityCritical?: boolean;
    isSecuritySafeCritical?: boolean;
    isSecurityTransparent?: boolean;
    structLayoutAttribute?: StructLayoutAttribute;
    typeInitializer?: ConstructorInfo;
    typeHandle?: RuntimeTypeHandle;
    guid?: string;
    baseType?: Type;
    isSerializable?: boolean;
    containsGenericParameters?: boolean;
    isVisible?: boolean;
    genericTypeParameters?: Type[];
    declaredConstructors?: ConstructorInfo[];
    declaredEvents?: EventInfo[];
    declaredFields?: FieldInfo[];
    declaredMembers?: MemberInfo[];
    declaredMethods?: MethodInfo[];
    declaredNestedTypes?: TypeInfo[];
    declaredProperties?: PropertyInfo[];
    implementedInterfaces?: Type[];
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
    search: string;
  };

  type undefinedParams = {
    search?: string;
    sort?: string;
    pageIndex?: number;
    pageSize?: number;
  };

  type undefinedParams = {
    id: number;
  };

  type undefinedParams = {
    id: number;
  };

  type undefinedParams = {
    key?: string;
  };
}
