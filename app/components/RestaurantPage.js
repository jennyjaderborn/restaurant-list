/**
 *
 * RestaurantPage
 *
 */

import React from "react";
import RestaurantList from './RestaurantList';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */

const restaurants =[
  {
    id: 0,
    name: 'Köket'
  },
  {
    id: 1,
    name: 'Kooperativet'
  },
  {
    id: 2,
    name: 'Lasse på heden'
  }
] 

class RestaurantPage extends React.Component {
  render() {
    return (
    <div>
    <h1>Restauranger</h1>
    <RestaurantList restaurants={restaurants}/>
    </div>
    );
  }
}

RestaurantPage.propTypes = {};

export default RestaurantPage;
