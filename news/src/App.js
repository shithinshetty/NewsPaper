
import './App.css';

import React, { Component } from 'react'
import NavBAr from './components/NavBAr';
import NEews from './components/Newsitem';
import Noex from './components/News';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
 
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBAr/>
        <Routes>
          <Route exact path="/" element ={<Noex key='general' pageSize={5} country="in" category="general"/>}>
          </Route>
          <Route exact path="/business"element ={<Noex key='business' pageSize={5} country="in" category="business"/>}>
          </Route>
          <Route exact path="/health"element ={<Noex key='health' pageSize={5} country="in" category="health"/>}>
          </Route>
          <Route exact path="/technology"element ={<Noex key='technology'pageSize={5} country="in" category="technology"/>}>
          </Route>
          <Route exact path="/entertainment"element ={<Noex key='entertainment' pageSize={5} country="in" category="entertainment"/>}>
          </Route>
          <Route exact path="/sports"element ={<Noex key='sports' pageSize={5} country="in" category="sports"/>}>
          </Route>
         
        </Routes>
        
        </Router>
       
      </div>
    )
  }
}

