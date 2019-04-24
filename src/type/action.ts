interface IAction{
    type: string;
    payload?: any;
}

export type action = IAction;