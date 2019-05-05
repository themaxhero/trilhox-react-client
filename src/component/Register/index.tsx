import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./index.css"
import { Dispatch } from "redux";
import { state } from "../../type/state";
import { connect } from "react-redux";
import { changeUsername,
         changePassword,
         changeEmail,
         submitRegister, 
} from "../../action/register";

interface IProps {
    username: string | undefined;
    password: string | undefined;
    email: string | undefined;
    error: string | undefined;
    onChangeUsername: (e: any) => void;
    onChangeEmail: (e: any) => void;
    onChangePassword: (e: any) => void;
    onSubmitRegister: (e: any) => void;
}

function Component({ username,
                     password,
                     email,
                     error,
                     onChangeUsername,
                     onChangeEmail,
                     onChangePassword,
                     onSubmitRegister, 
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
                    onSubmit={ onSubmitRegister }>
                    { error 
                        ? <div className="landing-error">{ error }</div> 
                        : <div/> 
                    }
                    <FormControl 
                        className="landing-input"
                        onChange={ onChangeEmail }
                        value={ email ? email : "" }
                        type="email"
                        placeholder="E-mail"/>
                    <FormControl 
                        className="landing-input"
                        onChange={ onChangeUsername }
                        value={ username ? username : "" }
                        placeholder="username"/>
                    <FormControl 
                        className="landing-input"
                        onChange={ onChangePassword }
                        value={ password ? password : "" }
                        type="password" 
                        placeholder="Password"/>
                    <div className="landing-btn-container">
                        <Button 
                            variant="primary"
                            disabled={ !email || !username || !password }
                            onClick={ onSubmitRegister }>
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
        username: state.register.username,
        email: state.register.email,
        password: state.register.password,
        error: state.register.error,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        onChangeUsername: (e: any) => {
            dispatch(changeUsername(e.target.value));
        },
        onChangeEmail: (e: any) => {
            dispatch(changeEmail(e.target.value));
        },
        onChangePassword: (e: any) => {
            dispatch(changePassword(e.target.value));
        },
        onSubmitRegister: (e: any) => {
            e.preventDefault();
            dispatch(submitRegister());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);