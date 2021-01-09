import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "./HomeComponent";
import About from "./AboutComponent"
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";


function Main(){
    return (
      <div>
            <Header/>
              <TransitionGroup>
                <CSSTransition  classNames="page" timeout={300}>
                  <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/about"/>
                    <Redirect to="/home"/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            <Footer/>
      </div>
    )
  }

export default Main;