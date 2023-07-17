import axios, { AxiosInstance } from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";

import { CONFIGS } from "@/config";
import { getItem, setItem } from "@/utilities/persist-storage";

const baseURL = CONFIGS.BACKEND_BASE_URL;

// Create new axios instance
const $http: AxiosInstance = axios.create({
    baseURL,
    // timeout: 30000, // prevent timeouts for now caused some errors in a production environment
    headers: {
        "Content-Type": "application/json",
    },
});

$http.interceptors.request.use(async (config) => {
    await refreshAuthTokenLogic();

    const accessToken = getItem("access-token", "string");

    // If access-token is available, add it to the Axios Authorization header
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
});

export const refreshAuthTokenLogic = async () => {
    const accessTokenJWT = getItem("access-token", "string") as string;
    const refreshTokenJWT = getItem("refresh-token", "string") as string;

    // if access-token or refresh-token is not available, bail out
    if (!accessTokenJWT || !refreshTokenJWT) return;

    const accessToken: JwtPayload = jwt_decode(accessTokenJWT);
    const refreshToken: JwtPayload = jwt_decode(refreshTokenJWT);

    // confirm that both access-token and refresh-token have exp property
    if (!accessToken.exp || !refreshToken.exp) return;

    // Check if accessToken is expired and refreshToken has not expired
    const accessTokenIsExpired = accessToken.exp * 1000 < Date.now();
    const refreshTokenIsNotExpired = refreshToken.exp * 1000 > Date.now();

    if (accessTokenIsExpired && refreshTokenIsNotExpired) {
        try {
            const { data: response, status } = await axios.post(baseURL + "/v1/auth/refresh-tokens", { refreshToken: refreshTokenJWT });

            if (status === 200 && response.data) {
                // update access-token and refresh-token
                setItem("access-token", response.data.accessToken);
                setItem("refresh-token", response.data.refreshToken);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // console.log("error.response:", error.response);
            }
        }
    }
};

export default $http;
