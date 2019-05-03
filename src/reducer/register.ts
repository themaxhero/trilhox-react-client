import { loop, Cmd } from "redux-loop";
import { registerState as state} from "../type/state";
import { action } from '../type/action';
import { setTokenAction, setErrorMsg } from "../action/register";
import axios from "axios";
import { push } from "connected-react-router";

const config = require("../config.json");

const initialState: state = {
    username: undefined,
    email: undefined,
    password: undefined,
    error: undefined,
}

function submitAction(username: string, email: string,  password: string){
    const body = { username, email, password };
    const endpoint = `http://${config.api}:${config.port}/register`;
    const headers = { "Content-Type": "application/json" };
    const options = { crossdomain: true, headers };
    return axios.post(endpoint, body, options);
}


function changeUsername(state: state, payload: any){
    const username = payload.username === "" ? undefined : payload.username;
    return loop({ ...state, username }, Cmd.none);
}

function changeEmail(state: state, payload: any){
    const email = payload.email === "" ? undefined : payload.email;
    return loop({ ...state, email }, Cmd.none);
}

function changePassword(state: state, payload: any){
    const password = payload.password === "" ? undefined : payload.password;
    return loop({ ...state, password }, Cmd.none);
}

function storeToken(token: string){
    localStorage.setItem("token", token);
}

function setToken(state: state, payload: any){
    const { token } = payload.token.data;
    const cmd = Cmd.run(
        storeToken,
        { successActionCreator: () => push("/kanbans"),
          failActionCreator: () => push("/"),
          args: [ token ],
        },
    );
    return loop({ ...state, token }, cmd);
}

function submit(state: state, _: any){
    const { email, username, password } = state;
    const success = (token: string) => {
        return (setTokenAction(token) as action);
    }
    const options = {
        successActionCreator: success,
        failActionCreator: (obj: any) => setErrorMsg(obj),
        args: [ username, email, password ],
    };
    const cmd = Cmd.run(submitAction, options);
    return loop(initialState, cmd);
}

function setError(state: state, payload: any){
    return loop({...state, error: payload.msg}, Cmd.none);
}

export function register(state: state = initialState, { type, payload }: action){
    switch (type) {
        case "REGISTER/CHANGE_USERNAME":
            return changeUsername(state, payload);

        case "REGISTER/CHANGE_EMAIL":
            return changeEmail(state, payload);

        case "REGISTER/CHANGE_PASSWORD":
            return changePassword(state, payload);

        case "REGISTER/SET_ERROR_MSG":
            return setError(state, payload);

        case "REGISTER/SET_TOKEN":
            return setToken(state, payload);

        case "REGISTER/SUBMIT":
            return submit(state, payload);

        default:
            return loop(state, Cmd.none);
    }
}