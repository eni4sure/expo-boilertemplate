import { CONFIGS } from "../config";
import { PersistStorage } from "@src/utilities";
import axios, { AxiosError, AxiosInstance } from "axios";

const baseURL = CONFIGS.BACKEND_BASE_URL;

// Create new axios instance
const $http: AxiosInstance = axios.create({
    baseURL,
    timeout: 30000,
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
            case "-middleware/user-not-found": {
                // Redirect to onboarding screen
                break;
            }

            case "-middleware/user-email-not-verified": {
                // Redirect to verify email screen
                break;
            }

            case "-middleware/user-deactivated": {
                // Redirect to deactivated screen
                break;
            }

            case "-middleware/token-expired": {
                // Redirect to login screen
                break;
            }
        }
    }

    return Promise.reject(error);
});

export default $http;
