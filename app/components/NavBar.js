import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';

const Navbar = () => {
    return (
    <div>
    <NavLink activeClassName="selected" to="/" exact>Home</NavLink>
    <NavLink activeClassName="selected" to="/restauranger" exact>restauranger</NavLink>   
</div>
    )
}

export default Navbar; 