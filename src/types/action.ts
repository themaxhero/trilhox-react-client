import { Action } from "redux";

interface IAction extends Action {
    type: string;
    payload?: any;
}

export type action = IAction;