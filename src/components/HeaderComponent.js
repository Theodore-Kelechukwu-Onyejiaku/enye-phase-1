import React, {Component} from "react";
import {NavLink} from "react-router-dom";


function Header(){
    return(
        <React.Fragment>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <NavLink className="brand-logo" to="/">
                                <span className="">Records API</span>    
                            </NavLink>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <NavLink className="nav-link" to="/menu">
                                    <i className="material-icons left">info</i>About
                                </NavLink>
                            </li>
                            <li>
                                <a className="modal-trigger" href="#modal1">
                                    <i className="material-icons left">login</i>Login
                                </a>    
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <NavLink className="nav-link" to="/menu">
                            <i className="material-icons left">info</i>About
                        </NavLink>
                    </li>
                    <li>
                        <a className="modal-trigger" href="#modal1">
                            <i className="material-icons left">login</i>Login
                        </a>    
                    </li>
                    Records Api
                </ul>

                {/* FOR LOGIN MODAL */}
                <div id="modal1" className="modal">
                    <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>

            </React.Fragment> 
    )
}

export default Header;