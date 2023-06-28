import $http from "./xhr";

export const APIRegister = async (data: any) => $http.post("/auth/register", data).then((res) => res.data);
export const APILogin = async (data: any) => $http.post("/auth/login", data).then((res) => res.data);
export const APIVerifyEmail = async (data: any) => $http.post("/auth/verify-email", data).then((res) => res.data);
export const APIRequestEmailVerification = async (data: any) => $http.post("/auth/request-email-verification", data).then((res) => res.data);
export const APIRequestPasswordReset = async (data: any) => $http.post("/auth/request-password-reset", data).then((res) => res.data);
export const APIResetPassword = async (data: any) => $http.patch("/auth/reset-password", data).then((res) => res.data);

export const APIGetConfig = async (key: string) => $http.get(`/core/${key}`).then((res) => res.data);

export const APIGetCurrentUser = async () => $http.get("/users/get-current").then((res) => res.data);
export const APIUpdateProfile = async (data: any) => $http.patch("/users/update-profile", data).then((res) => res.data);
export const APIUpdatePassword = async (data: any) => $http.patch("/users/update-password", data).then((res) => res.data);
