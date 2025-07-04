import axios from "axios";
import { BASE_URL } from "../global/constant";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
