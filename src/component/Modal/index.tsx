import React from "react";
import "./index.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface IButton {
    text: string;
    variant: "primary" | "danger" | "success";
    callback: () => void;
}

interface IProps{
    title: string;
    msg: string;
    buttons: IButton[];
}

function Component({title, msg, buttons }: IProps){
    const mapFunc = (button: IButton) => {
        return (
            <Button
                className="mr-2"
                variant={ button.variant } 
                onClick={ button.callback }>
                { button.text }
            </Button>
        );
    }
    return (
        <div className="black-bg">
            <Modal.Dialog className="over-black-bg top20">
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    <p>{ msg }</p>
                </Modal.Body>
            
                <Modal.Footer>
                    { buttons.map(mapFunc) }
                </Modal.Footer>
            </Modal.Dialog>;
        </div>
    )
}

export default Component