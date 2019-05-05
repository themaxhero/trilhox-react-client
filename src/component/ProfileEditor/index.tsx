import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import User, { user } from '../../type/user';

interface IProps {
    user: user;
}


function Component({ user }: IProps){
    //FIXME: Assign the proper dispatchs
    const name = User.getName(user);
    const username = User.getUsername(user);
    const email = User.getEmail(user);
    const avatar = User.getAvatar(user);
    const onChangeName = () => {};
    return (
        <div>
            <Form>
                <Form.Group as={ Row }>
                    <Form.Label>
                        Name: 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            plaintext
                            onChange={ onChangeName }
                            defaultValue={ name }/>
                    </Col>
                </Form.Group>
                <Form.Group as={ Row }>
                    <Form.Label>
                        username: 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            plaintext
                            readOnly
                            defaultValue={ username }/>
                    </Col>
                </Form.Group>
                <Form.Group as={ Row }>
                    <Form.Label>
                        E-mail: 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            plaintext
                            readOnly
                            defaultValue={ email }/>
                    </Col>
                </Form.Group>
                <Form.Group as={ Row }>
                    <Form.Label>
                        password: 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="password"
                            />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row }>
                    <Form.Label>
                        password: 
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue={ avatar }/>
                    </Col>
                </Form.Group>
            </Form>
            <div>
                <Button>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Component;