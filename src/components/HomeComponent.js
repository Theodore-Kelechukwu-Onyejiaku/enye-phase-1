import React, { useEffect, useState } from "react";
import {Stagger, Fade} from "react-animation-components";


function Home({error, localRecords, records}){
    
    // if(error){
    //     return(
    //         <div>{error}</div>
    //     )
    // }
    return (
        <Stagger in>
            {localRecords.map((item) =>{
                return(
                    <Fade in>
                    <li>{item.name}</li>
                    </Fade>
                )
                
            })}
        </Stagger>
    )
}

export default Home;