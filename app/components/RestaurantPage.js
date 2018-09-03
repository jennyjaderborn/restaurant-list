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
class RestaurantPage extends React.Component {
  render() {
    return (
    <div>
    <h1>Restauranger</h1>
    <RestaurantList/>
    </div>
    );
  }
}

RestaurantPage.propTypes = {};

export default RestaurantPage;
