import axios from "axios";
import {URL} from "./../../config/consts";

export async function getVendors(searchValue = '', offset='') {
    let limit = 5;
    return await axios.get(`${URL.VENDORS}?vendorName=${searchValue}&limit=${limit}&offset=${offset}`);
}

export async function createUpdateVendorrequest(vendorInfo) {    
    if (vendorInfo?.vendorId) {
        vendorInfo.updatedBy = "1";
        return await axios.put(`${URL.VENDORS}`, vendorInfo);
    } else {
        vendorInfo.createdBy = "1";
        vendorInfo.updatedBy = "1";;
        return await axios.post(URL.VENDORS, vendorInfo);
    }
}

export async function  getVendorDetailsRequest(vendorUUID) {
    return await axios.get(`${URL.VENDORS}/${vendorUUID}`)
}

export async function deleteVendorRequest(vendorId) {
    return await axios.delete(`${URL.VENDORS}/${vendorId}`);
}



export async function submitVendorInfo(payload) {
    return await axios.post(URL.VENDORS, payload)
}

