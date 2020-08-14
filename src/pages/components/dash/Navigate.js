import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from 'reactstrap';
import { useRouteMatch, Link } from 'react-router-dom'

export const Navigate = ({setIsAuthenticated}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const { url } = useRouteMatch()
    return (
        <div>
            <Navbar color="dark" dark expand="md" className='text-light'>
                <div className='container'>



                    <NavbarBrand href={`${url}`}><h3><i className="fa fa-spotify fa-fw "></i>Spotify</h3></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem className="text-white">
                                <NavLink onClick={()=>setIsAuthenticated(false)} > <Link to={`${url}/premium`}style={{textDecoration:'none'}} className='text-white' > <h5> Premium</h5> </Link></NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className='text-light'>

                            <NavItem className="text-white">
                                <NavLink > <Link to={`${url}/premium`}style={{textDecoration:'none'}} className='text-white' > <h5> Premium</h5> </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <Link to={`${url}/signin`}style={{textDecoration:'none'}} className='text-white' > <h5> SignIn</h5>  </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <Link to={`${url}/signup`}style={{textDecoration:'none'}} className='text-white' > <h5> SignUp</h5>  </Link></NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Help</NavLink>
                            </NavItem>
                             */}
                            {/* <NavbarText>Simple Text</NavbarText> */}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

