export function changeUsername(value: string) {
    return { type: "REGISTER/CHANGE_USERNAME", payload: { username: value } };
}
export function changeEmail(value: string) {
    return { type: "REGISTER/CHANGE_EMAIL", payload: { email: value } };
}
export function changePassword(value: string) {
    return { type: "REGISTER/CHANGE_PASSWORD", payload: { password: value } };
}
export function setTokenAction(token: string){
    return { type: "REGISTER/SET_TOKEN", payload: { token }}
}
export function setErrorMsg(value: any) {
    console.log(`Error: ${value}`);
    return { type: "REGISTER/SET_ERROR_MSG" };
}
export function submitRegister() {
    return { type: "REGISTER/SUBMIT" };
}