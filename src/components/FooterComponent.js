import React from "react";
import {Link} from "react-router-dom"

function Footer(props) {
  return (
    <footer className="page-footer" style={{marginBottom: -0}}>
      <div class="fixed-action-btn">
        <button class="btn-floating btn-large red" id="floater" >
          <i  class="large material-icons">mode_edit</i>
        </button> <br/>
        {/* <button class="btn-floating btn-large red" id="float" >
          <i  class="large material-icons">mode_edit</i>
        </button> */}

    </div>
          
          <div className="footer-copyright">
            <div className="container">
            © 2021 Copyright Theodore Kelechukwu Onyejiaku
            </div>
          </div>
    </footer>
  );
}

export default Footer;
