import $http from "./xhr";

export const APIVersion1Register = async (data: any) => $http.post("/v1/auth/register", data).then((res) => res.data);
export const APIVersion1Login = async (data: any) => $http.post("/v1/auth/login", data).then((res) => res.data);
export const APIVersion1VerifyEmail = async (data: any) => $http.post("/v1/auth/verify-email", data).then((res) => res.data);
export const APIVersion1RequestEmailVerification = async (data: any) => $http.post("/v1/auth/request-email-verification", data).then((res) => res.data);
export const APIVersion1RequestPasswordReset = async (data: any) => $http.post("/v1/auth/request-password-reset", data).then((res) => res.data);
export const APIVersion1RefreshTokens = async (data: any) => $http.post("/v1/auth/refresh-tokens", data).then((res) => res.data);
export const APIVersion1Logout = async (data: any) => $http.post("/v1/auth/logout", data).then((res) => res.data);
export const APIVersion1ResetPassword = async (data: any) => $http.patch("/v1/auth/reset-password", data).then((res) => res.data);

export const APIVersion1GetCurrentUser = async () => $http.get("/v1/users/get-current").then((res) => res.data);
export const APIVersion1UpdateProfile = async (data: any) => $http.patch("/v1/users/update-profile", data).then((res) => res.data);
export const APIVersion1UpdatePassword = async (data: any) => $http.patch("/v1/users/update-password", data).then((res) => res.data);

export const APIGetConfig = async (key: string) => $http.get(`/config/${key}`).then((res) => res.data);
