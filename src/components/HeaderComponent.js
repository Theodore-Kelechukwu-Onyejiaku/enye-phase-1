import React, {Component} from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <React.Fragment>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <NavLink className="brand-logo center" to="/">
                                <span className="">Records API</span>    
                            </NavLink>
                        
                        </div>
                    </nav>
                </div>
            </React.Fragment> 
    )
}

export default Header;