import { CONFIGS } from "../config";
import { PersistStorage } from "@src/utilities";
import axios, { AxiosError, AxiosInstance } from "axios";

const baseURL = CONFIGS.BACKEND_BASE_URL;

// Create new axios instance
const $http: AxiosInstance = axios.create({
    baseURL,
    // timeout: 30000, // prevent timeouts for now caused some errors in a production environment
    headers: {
        "Content-Type": "application/json",
    },
});

$http.interceptors.request.use(async (config: any) => {
    const authToken = await PersistStorage.getItem("@/authToken");

    // If auth-token is available, add it to the Axios API header
    if (authToken) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
    }

    return config;
});

$http.interceptors.response.use(undefined, async (error: AxiosError<any>) => {
    // If response returned, Intercept the responses and check if status code is 401
    if (error.response && error.response.status === 401) {
        switch (error.response.data.message) {
            case "-middleware/token-expired": {
                // TODO: Implement refresh token at some point :)
                break;
            }
        }
    }

    return Promise.reject(error);
});

export default $http;
