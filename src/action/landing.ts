export function changeLogin(value: string) {
    return { type: "LANDING/CHANGE_LOGIN", payload: { login: value } };
}
export function changePassword(value: string) {
    return { type: "LANDING/CHANGE_PASSWORD", payload: { password: value } };
}
export function setErrorMsg(value: any) {
    console.log(`Error: ${value}`);
    return { type: "LANDING/SET_ERROR_MSG" };
}
export function setTokenAction(token: string){
    return { type: "LANDING/SET_TOKEN", payload: { token }};
}
export function submitLogin() {
    return { type: "LANDING/SUBMIT" };
}