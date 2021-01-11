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
                        <ul className="right">
                            <li>
                             {/* Element Showed */}
                                <a id="menu" href="#" className="waves-effect waves-light btn btn-floating pulse red"><i className="material-icons large left">info</i></a>
                                {/* TAP TARGET */}
                                <div className="tap-target" data-target="menu">
                                <div className="tap-target-content">
                                    <h5>Enye</h5>
                                    <p>This is an assessment by Enye! And I love it!</p>
                                </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </React.Fragment> 
    )
}

export default Header;