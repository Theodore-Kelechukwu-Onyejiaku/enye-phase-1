import React, { useState, useEffect } from 'react';
import Header from "./HeaderComponent";
import HomePage from "./HomeComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Main(){
  const [records, setRecords] = useState("");
  const [error, setError ] = useState("");

  useEffect(()=> {
     const fetchRecords = async()=>{
      try {
        const data = await fetch("http://api.enye.tech/v1/challenge/records");
        const jsonData = await data.json()
        setRecords(jsonData.records.profiles)
        console.log(jsonData.records.profiles);
      } catch (error) {
        setError(error.message)
      }
    }
     fetchRecords();
     
  }, []);

 
    return (
      <div>
              <Header/>
              <TransitionGroup>
                <CSSTransition  classNames="page" timeout={300}>
                  <Switch>
                    <Route path="/home" component={()=><HomePage error={error} records={records}/>}/>
                    <Redirect to="/home"/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            
      </div>
    )
  }

export default Main;