import axios from "axios";
import {URL} from "./../../config/consts";

export async function getTrainers(searchValue = '', offset='') {
    let limit = 5;
    return await axios.get(`${URL.TRAINERS}?trainerName=${searchValue}&limit=${limit}&offset=${offset}`);
}

export async function createUpdateTrainerrequest(trainerInfo) {    
    if (trainerInfo?.trainerId) {
        return await axios.put(URL.TRAINERS, trainerInfo);
    } else {
        return await axios.post(URL.TRAINERS, trainerInfo);
    }
}

export async function  getTrainerDetailsRequest(trainerUUID) {
    return await axios.get(`${URL.TRAINERS}/${trainerUUID}`)
}

export async function deleteTrainerRequest(trainerId) {
    return await axios.delete(`${URL.TRAINERS}/${trainerId}`);
}

export async function getAgeGroups() {
    return await axios.get(URL.AGE_GROUPS);
}

export async function submitTrainerInfo(payload) {
    return await axios.post(URL.TRAINERS, payload)
}

/**
 * get all the training types list
 * @returns 
 */
export async function getTrainingTypesList() {
    return await axios.get(URL.TRAINING_TYPES)
}


