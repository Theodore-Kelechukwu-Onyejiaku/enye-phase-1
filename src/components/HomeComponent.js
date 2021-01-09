import React, { useEffect, useState } from "react";
import {Stagger, Fade} from "react-animation-components";


function Profile({error, localRecords, records}){
    // if(error){
    //     return(
    //         <div>{error}</div>
    //     )
    // }

    // else{
        return (
            <Stagger in>
                {localRecords.map((item) =>{
                    return(
                        <Fade in>
                        <li>{item.Gender}</li>
                        </Fade>
                    )
                    
                })}
            </Stagger>
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
        return <div>Loading ...</div>
    }
    

    
}

export default Home;