/**
 *
 * RestaurantList
 *
 */

import React from "react";
import RestaurantListItem from './RestaurantListItem';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class RestaurantList extends React.Component {
  render() {
    return (
      <div>
        <h1>listan</h1>
        <RestaurantListItem/>
    </div>
    );
  }
}

RestaurantList.propTypes = {};

export default RestaurantList;
