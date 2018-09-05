/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RestaurantPage from 'components/RestaurantPage';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';

export default function App() {
  return (


    <Router>    
    <div>
      <NavLink activeClassName="selected" to="/" exact>Home</NavLink>
   
      <NavLink activeClassName="selected" to="/restauranger" exact>restauranger</NavLink>         
   
      <Route path="/" exact strict render={
        ()=> {
          return (<h1>This is homePage</h1>);
        }
      }/>

      <Route path="/restauranger" exact strict render={
        ()=> {
          return (<RestaurantPage/>);
        }
      }/>
      </div>
  </Router>
    
  );
}
