import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";


function Component({}){
    //FIXME:  Check Current page.
    const showSearch = false;
    const searchBar = (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
    );
    return (
        <Navbar bg="dark" variant="dark">
            <Link className="navbar-brand" to="/">Trilho X</Link>
            <Nav className="mr-auto">
                <Nav.Link to="/kanbans">Kanbans</Nav.Link>
            </Nav>
            { showSearch ? searchBar : <div/>}  
        </Navbar>
    );
}

export default Component;