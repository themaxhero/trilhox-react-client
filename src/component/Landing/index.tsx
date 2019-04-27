import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface IProps {
    login: string;
    password: string;
}

function Component({ login, password }: IProps){
    //FIXME: Pass thep proper dispatch here.
    const onChangeLogin = () => {};
    const onChangePassword = () => {};
    const onSubmitLogin = () => {};
    return (
        <div className="landing-container">
            <Form className="screen-middle">
                <FormControl 
                    onChange={ onChangeLogin }
                    value={ login }
                    type="email"
                    placeholder="E-Mail"/>
                <FormControl 
                    onChange={ onChangePassword }
                    value={ password }
                    type="password" 
                    placeholder="Password"/>
                <Button 
                    variant="primary"
                    onClick={ onSubmitLogin }>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Component;