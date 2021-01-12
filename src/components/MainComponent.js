import React, { useState, useEffect } from 'react';
import HomePage from "./HomeComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Main(){
  const [isLoading, setIsLoading ] = useState(true);
  const [records, setRecords] = useState([]);
  const [error, setError ] = useState("");

  useEffect(()=> {
    const fetchData = async () =>{
        const data = await fetch("http://api.enye.tech/v1/challenge/records");
        const jsonData = await data.json()
        setRecords(jsonData.records.profiles)
        setIsLoading(false)
    }
    fetchData();
    
        console.log(isLoading);
//eslint-disable-next-line
}, [])
    return (
      <div>
              <TransitionGroup>
                <CSSTransition  classNames="page" timeout={300}>
                  <Switch>
                    <Route path="/home" component={()=><HomePage error={error} isLoading={isLoading} records={records}/>}/>
                    <Redirect to="/home"/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            
      </div>
    )
  }

export default Main;