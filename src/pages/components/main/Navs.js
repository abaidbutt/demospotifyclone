import React from 'react'
import {InputGroup, InputGroupAddon, Input, InputGroupText} from 'reactstrap'
export const Navs = () => {
    return (
        <div>
            <nav
                className="navbar navbar-dark sticky-top bg-dark shadow"
            >
                <h1><a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"
                ><i className='fa fa-spotify fa-fw text-white'></i>Spotify</a
                ></h1>
                <div>
                    <InputGroup >
                        <InputGroupAddon addonType="prepend" className='rounded-pill bg-transparent'>
                            <InputGroupText className='rounded-pill bg-transparent text-white border-none'><i className='fa fa-search fa-fw'></i> </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Search" type='searh' className='rounded-pill bg-transparent text-white' />
                    </InputGroup>

                </div>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>


        </div>
    )
}
