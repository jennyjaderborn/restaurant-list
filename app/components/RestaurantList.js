/**
 *
 * RestaurantList
 *
 */
import React from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class RestaurantList extends React.Component {  

  render() {
    console.log(this.props.restaurants)
    
    const data = this.props.restaurants;

    const listItems = data.map((restaurant,i) => 
      <RestaurantListItem restaurant={restaurant}
      key={i}/>
    )
console.log(listItems)
      return (
       <div className="restaurantWrap">
          {listItems}
        </div>
      )
    }
  }


RestaurantList.propTypes = {
<<<<<<< HEAD

  restaurants: PropTypes.array.isRequired
};

=======
  /*listItems: PropTypes.string.isRequired,*/
  restaurants: PropTypes.array.isRequired
  
};
console.log(PropTypes)
>>>>>>> 4db61dda0a3f02dbe0c5b5ca3d66288729af78cc
export default RestaurantList;
