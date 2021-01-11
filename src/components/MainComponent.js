import React, { useState, useEffect } from 'react';
import Header from "./HeaderComponent";
import HomePage from "./HomeComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { RECORDS } from "../shared/records"


function Main(){
  const [records, setRecords] = useState("");
  const [localRec, setLocalRecords] = useState(RECORDS);
  const [error, setError ] = useState("");

  

  useEffect(async ()=> {
     
      try {
          const data = await fetch("http://api.enye.tech/v1/challenge/records");
          const jsonData = await data.json()
          // setRecords(jsonData)
          console.log(jsonData);
      } catch (error) {
          // setError(error.message)
      }
      
  //eslint-disable-next-line
  }, [])

    return (
      <div>
              <Header/>
              <TransitionGroup>
                <CSSTransition  classNames="page" timeout={300}>
                  <Switch>
                    <Route path="/home" component={()=> <HomePage localRecords={localRec} error={error} records={records} />}/>
                    <Redirect to="/home"/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            
      </div>
    )
  }

export default Main;