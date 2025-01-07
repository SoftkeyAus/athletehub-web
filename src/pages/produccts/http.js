import axios from "axios";
import {URL} from "./../../config/consts";

export async function getProducts(searchValue = '', offset=0) {
    let limit = 5;
    return await axios.get(`${URL.PRODUCTS}?productName=${searchValue}&limit=${limit}&offset=${offset}`);
}

export async function createUpdateProductrequest(productInfo) {    
    if (productInfo?.productId) {
        productInfo.updatedBy = sessionStorage.getItem("userId");
        return await axios.put(`${URL.PRODUCTS}`, productInfo);
    } else {
        productInfo.createdBy = sessionStorage.getItem("userId");;
        productInfo.updatedBy = sessionStorage.getItem("userId");;
        return await axios.post(URL.PRODUCTS, productInfo);
    }
}

export async function  getProductDetailsRequest(productUUID) {
    return await axios.get(`${URL.PRODUCTS}/${productUUID}`)
}

export async function deleteProductRequest(productId) {
    return await axios.delete(`${URL.PRODUCTS}/${productId}`);
}

export async function getProductTypes() {
    return await axios.get(URL.PRODUCT_TYPES);
}

export async function getVendors() {
    return await axios.get(URL.VENDORS);
}

export async function submitProductInfo(payload) {
    return await axios.post(URL.PRODUCTS, payload)
}

