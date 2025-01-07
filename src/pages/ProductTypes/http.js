import axios from "axios";
import {URL} from "./../../config/consts";

export async function getProductTypes(searchValue = '', offset='') {
    let limit = 5;
    return await axios.get(`${URL.PRODUCT_TYPES}?productType=${searchValue}&limit=${limit}&offset=${offset}`);
}

export async function createUpdateProductTyperequest(productTypeInfo) {    
    if (productTypeInfo?.productTypeId) {
        productTypeInfo.updatedBy = "1";
        return await axios.put(`${URL.PRODUCT_TYPES}`, productTypeInfo);
    } else {
        productTypeInfo.createdBy = "1";
        productTypeInfo.updatedBy = "1";;
        return await axios.post(URL.PRODUCT_TYPES, productTypeInfo);
    }
}

export async function  getProductTypesDetailsRequest(productTypeUUID) {
    return await axios.get(`${URL.PRODUCT_TYPES}/${productTypeUUID}`)
}

export async function deleteProductTypeRequest(productTypeId) {
    return await axios.delete(`${URL.PRODUCT_TYPES}/${productTypeId}`);
}



export async function submitProductTypeInfo(payload) {
    return await axios.post(URL.PRODUCT_TYPES, payload)
}

