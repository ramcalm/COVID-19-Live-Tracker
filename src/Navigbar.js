import React, { useState } from 'react';
import * as serviceWorker from './serviceWorker';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigbar() {

    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        return setIsOpen(!isOpen);
    }
    return (
        <div>
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/hospitals/">Hospitals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/statistics/">Statistics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/helpline/">Helpline</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/guidelines/">Guidelines</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
            
    );
}

export default Navigbar;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
