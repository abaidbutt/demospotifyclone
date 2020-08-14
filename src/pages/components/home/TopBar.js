import React, { useState } from 'react';
import {
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const TopBar = ({setIsAuthenticated}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar expand="md" style={{ top: '-50px' }} >
            {/* <NavbarBrand href="/" className="text-white">reactstrap</NavbarBrand> */}
            <Nav className="mr-auto" navbar>
                <Button color="primary" className='bg-transparent text-white rounded-pill'><i className="fas fa-chevron-left fa-fw"></i></Button>{' '}{' '}{' '}
                <Button color="primary" className='bg-transparent text-white rounded-pill'><i className="fas fa-chevron-right fa-fw"></i></Button>
            </Nav>
            <Button color="primary" className='bg-transparent text-white rounded-pill' onClick={()=>setIsAuthenticated(true)}>Upgrade</Button>{' '}

            <Nav>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-white" >
                        User
              </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Account
                </DropdownItem>
                        <DropdownItem>
                            Profile
                </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Logout
                </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}

        </Navbar>

    );
}

export default TopBar