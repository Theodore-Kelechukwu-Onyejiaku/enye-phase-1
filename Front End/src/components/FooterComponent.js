import React from "react";

function Footer(){
    return(
        
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Records API Front End</h5>
                <p className="grey-text text-lighten-4">Thanks Enye! I love this project!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contact Me</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/Theodore-Kelechukwu-Onyejiaku"><i className="fa fa-github"></i></a></li>
                  <li><a className="grey-text text-lighten-3" href="https://twitter.com/JavaScriptar"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/theodore20151014166/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Theodore Kelechukwu Onyejiaku
            </div>
          </div>
        </footer>
            
    )
}

export default Footer;