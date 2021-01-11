import React, { useEffect, useState } from "react";

function Loader(){
    return(
        <div className="center-align" style={{marginTop:"40vh"}}>
            <div style={{width: "100%", margin: "auto"}}>
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Loader;