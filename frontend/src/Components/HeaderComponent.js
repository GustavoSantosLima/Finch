import React, { Component } from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <header>
                <Navbar color="faded" toggleable inverse className="navbar-custom bg-primary navbar-expand-sm navbar-dark">
                    <NavbarToggler left onClick={ this.toggleNavbar } />
                    <NavbarBrand href="/">Finch</NavbarBrand>
                        <Collapse isOpen={ this.state.isOpen } navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/category">Categoria</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/bill">Conta</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </header>
        )
    }
}

export default HeaderComponent