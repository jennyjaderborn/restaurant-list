/**
 *
 * RestaurantList
 *
 */

import React from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';


class RestaurantList extends React.Component {  

  render() {
    
    const data = this.props.restaurants;

/**Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item. The resulting array is ListItems. 
  */
    const listItems = data.map((restaurant,i) => 
      <RestaurantListItem 
                    restaurant={restaurant}
                    key={i}
      />)

      return (
       <div className="restaurantListWrap">
          {listItems}
        </div>
      )
    }
  }


RestaurantList.propTypes = {

  restaurants: PropTypes.array.isRequired
};

export default RestaurantList;
