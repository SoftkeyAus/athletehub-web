export const APP_API_URL = "http://localhost:6002/"; //getAPIURL()
// export const APP_API_URL = "http://16.170.201.219:3000/";//getAPIURL()
export const WEB_API_CONSTANT = "webApp/"; //getAPIURL()
export const URL = {
    PRODUCTS : "products",
    PRODUCT_TYPES: "product-types",
    VENDORS: "vendors",
    TRAINERS: "trainers",
    AGE_GROUPS: "getAgeGroups",
    TRAINING_TYPES: "training-types",
    AUTHENTICATION_LOGIN: APP_API_URL + WEB_API_CONSTANT+"login",
    AUTHENTICATION_SIGNUP: APP_API_URL + WEB_API_CONSTANT+"signUp",
    ADMIN_LOGIN: "auth/login",
    AUTH_FORGOT_PASSWORD: APP_API_URL + WEB_API_CONSTANT+"forgotPassword",
    COUNTRIES: "getCountries",
    SUBSCRIPTIONS: "subscriptions"
}

export const AWS_S3_BUCKET = 'https://athletehub-files.s3.eu-north-1.amazonaws.com/';