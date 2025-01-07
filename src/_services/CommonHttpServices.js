import axios from "axios";
import {URL} from "../config/consts";

export async function getSubscriptions() {
    return await axios.get(URL.SUBSCRIPTIONS)
}