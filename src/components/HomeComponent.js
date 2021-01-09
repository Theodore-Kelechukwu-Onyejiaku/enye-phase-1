import React, { useEffect, useState } from "react";
import {Stagger, Fade} from "react-animation-components";


function Home(props){
    const [records, setRecords] = useState("");

    useEffect(async ()=> {
        try {
            const data = await fetch("http://api.enye.tech/v1/challenge/records");
            const jsonData = await data.json()
            setRecords(jsonData)
            console.log(jsonData);
        } catch (error) {
            console.log(error)
        }
        
    //eslint-disable-next-line
    }, [])

    return (
        <Stagger in>
            {records.map((item) =>{
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