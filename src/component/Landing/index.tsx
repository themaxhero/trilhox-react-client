import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./index.css"
import { Dispatch } from "redux";
import { state } from "../../type/state";
import { connect } from "react-redux";
import { changeLogin, changePassword, submitLogin } from "../../action/landing";

interface IProps {
    login: string | undefined;
    password: string | undefined;
    error: string | undefined;
    onChangeLogin: (e: any) => void;
    onChangePassword: (e: any) => void;
    onSubmitLogin: (e: any) => void;
}

function Component({ login,
                     password,
                     error,
                     onChangeLogin,
                     onChangePassword,
                     onSubmitLogin, 
                   }: IProps){
    return (
        <div>
            <div className="black-bg" />
            <div className="landing-container over-black-bg">
                <div className="bg-dark p1em text-white rounded-top">
                    Login
                </div>
                <Form 
                    className="bg-light p1em landing-form rounded-bottom"
                    onSubmit={ onSubmitLogin }>
                    { error 
                        ? <div className="landing-error">{ error }</div> 
                        : <div/> 
                    }
                    <FormControl 
                        className="landing-input"
                        onChange={ onChangeLogin }
                        value={ login ? login : "" }
                        type="email"
                        placeholder="E-mail"/>
                    <FormControl 
                        className="landing-input"
                        onChange={ onChangePassword }
                        value={ password ? password : "" }
                        type="password" 
                        placeholder="Password"/>
                    <div className="landing-btn-container">
                        <Button 
                            variant="primary"
                            disabled={ !login || !password }
                            onClick={ onSubmitLogin }>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

function mapStateToProps(state: state){
    return {
        login: state.landing.login,
        password: state.landing.password,
        error: state.landing.error,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        onChangeLogin: (e: any) => {
            dispatch(changeLogin(e.target.value));
        },
        onChangePassword: (e: any) => {
            dispatch(changePassword(e.target.value));
        },
        onSubmitLogin: (e: any) => {
            e.preventDefault();
            dispatch(submitLogin());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);