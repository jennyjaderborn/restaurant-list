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
 
  
  render(){

    const data = this.props.restaurants;

      const restaurantList = data.map((restaurant, i) =>

          <RestaurantListItem key={i} restaurant={restaurant} />
        
      )
      console.log(restaurantList)
      return (
        <div>
           <ul>{restaurantList}</ul>
        </div>
      )

    
     }

}

/*RestaurantList.propTypes = {};*/

export default RestaurantList;
