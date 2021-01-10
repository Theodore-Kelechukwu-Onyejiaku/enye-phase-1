import React from "react";
import {Link} from "react-router-dom"

function Footer(props) {
  return (
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">For Enye</h5>
                <p className="grey-text text-lighten-4">Thanks guys! I hope to use this opportunity judiciously.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">About Me:</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons">facebook</i></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons">git</i></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons">twitter</i></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 Copyright Theodore Kelechukwu Onyejiaku
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  );
}

export default Footer;
