import { loop, Cmd } from "redux-loop";
import { landingState as state} from "../type/state";
import { action } from '../type/action';
import { setErrorMsg, setTokenAction } from "../action/landing";
import axios from "axios";
import { push } from "connected-react-router";

const config = require("../config.json");

const initialState: state = {
    login: undefined,
    password: undefined,
    loggedIn: false,
    token: undefined,
    error: undefined,
}

function submitAction(login: string, password: string){
    const body = { email: login, password };
    const endpoint = `http://${config.api}:${config.port}/login`;
    const headers = { "Content-Type": "application/json" };
    const options = { crossdomain: true, headers };
    return axios.post(endpoint, body, options);
}

function changeLogin(state: state, payload: any){
    const login = payload.login === "" ? undefined : payload.login;
    return loop({ ...state, login }, Cmd.none);
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
    const { login, password } = state;
    const success = (token: string) => {
        return (setTokenAction(token) as action);
    }
    const options = {
        successActionCreator: success,
        failActionCreator: (obj: any) => setErrorMsg(obj),
        args: [ login, password ],
    };
    const cmd = Cmd.run(submitAction, options);
    return loop(initialState, cmd);
}

function setError(state: state, payload: any){
    return loop({...state, error: payload.msg}, Cmd.none);
}

export function landing(state: state = initialState, { type, payload }: action){
    switch(type){
        case "LANDING/CHANGE_LOGIN":
            return changeLogin(state, payload);

        case "LANDING/CHANGE_PASSWORD":
            return changePassword(state, payload);

        case "LANDING/SUBMIT":
            return submit(state, payload);

        case "LANDING/SET_ERROR_MSG":
            return setError(state, payload);

        case "LANDING/SET_TOKEN":
            return setToken(state, payload);

        default:
            return loop(state, Cmd.none);
    }
}