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

let restaurants = [
            { 
              name: 'Bellini',
              address: 'Linnegatan 20'
            },
            { name: 'Un Poco',
            address: 'Vasagatan 4'
            }
          ];

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
