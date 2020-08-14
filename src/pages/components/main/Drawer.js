import React from 'react'
import { ReactComponent as HomeIcon } from '../../../svgs/home.svg'
export const Drawer = () => {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-2 col-sm-3 d-md-block bg-dark sidebar"
        >
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className='fa fa-home fa-fw text-white'></i>
                            
Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                    {/* {' '}||\{' '} */}
                            <i className="fa fa-grip-lines-vertical fa-sm"></i>\
                  Your Library
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                          <i className='fa fa-search fa-fw'></i>
                  Search
                </a>

                    </li>
                    <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                    >
                        <span>PLAYLISTS</span>
                        <a
                            className="d-flex align-items-center text-muted"
                            href="#"
                            aria-label="Add a new report"
                        >
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className='fa fa-plus-square fa-fw'></i>
                  Create Playlist
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                   <i className='fa fa-thumbs-up fa-fw'></i>
                  Liked Songs
                </a>
                    </li>
                </ul>
            </div>
        </nav>)
}
