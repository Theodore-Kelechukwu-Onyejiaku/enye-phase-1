import React, { useEffect, useState } from "react";
import {Stagger, Fade} from "react-animation-components";


function Loader(){
    return(
        <div style={{margin: "20vh 50vh 20vh 50vh"}}>
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
        
    )
}

function Profile({error, localRecords, records}){
    // if(error){
    //     return(
    //         <div>{error}</div>
    //     )
    // }

    // else{
        return (
            <div className="container">
            <div className="row">
            <Stagger in>
                {localRecords.map((item) =>{
                    return(
                        <Fade in>
                           
                                <div className="col s12 m6 l4">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                        <div className="chip">
                                            <img src="https://picsum.photos/300" alt="Contact Person" />
                                            Jane Doe
                                        </div>
                                        <span className="card-title">Card Title</span>
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">This is a link</a>
                                        <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            
                        </Fade>
                    )
                    
                })}
            </Stagger>
            </div>
            </div>
        )       
    // }
}


function Home({error, localRecords, records}){
    const [loading, setLoading ] = useState(false);

    useEffect(async ()=> {
        setTimeout(()=>{
            setLoading(true)
        }, 2000)
    //eslint-disable-next-line
    }, [])
    
    if(loading){
        return(
            <Profile error={error} localRecords={localRecords} records/>
        )
    }else{
        return(
            <Loader />
        )
    }
    

    
}

export default Home;