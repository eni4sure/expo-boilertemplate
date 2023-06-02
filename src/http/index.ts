import $http from "./xhr";

export const authLogin = async (data: any) => $http.post("/auth/login", data).then((res) => res.data);
export const authRegister = async (data: any) => $http.post("/auth/register", data).then((res) => res.data);
export const authVerifyEmail = async (data: any) => await $http.post("/auth/verify-email", { userId: data.userId, verificationToken: data.verificationToken }).then((res) => res.data);
export const authRequestEmailVerification = async (data: any) => await $http.post("/auth/request-email-verification", { userId: data.userId }).then((res) => res.data);
export const authRequestPasswordReset = async (data: any) => await $http.post("/auth/request-password-reset", { email: data.email }).then((res) => res.data);
export const authResetPassword = async (data: any) => await $http.patch("/auth/reset-password", { userId: data.userId, resetToken: data.resetToken, newPassword: data.newPassword }).then((res) => res.data);

export const userGetMe = async () => $http.get(`/users/get-current`).then((res) => res.data);
export const userUpdateProfile = async (data: any) => $http.patch(`/users/update-profile`, data).then((res) => res.data);
export const userUpdatePassword = async (data: any) => $http.patch(`/users/update-password`, data).then((res) => res.data);

export const coreGetConfig = async (key: string) => $http.get(`/core/${key}`).then((res) => res.data);
