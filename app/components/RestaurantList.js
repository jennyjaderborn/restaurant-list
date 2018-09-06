/**
 *
 * RestaurantList
 *
 */

import React from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';


class RestaurantList extends React.Component {  

  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({
      open: true
    })
  }

  onCloseModal = () => {
    this.setState({
      open: false
    })
  }


  render() {
    
    const data = this.props.restaurants;

/**Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item. The resulting array is ListItems. 
  */
    const listItems = data.map((restaurant,i) => 
      <RestaurantListItem 
                    restaurant={restaurant}
                    key={i}
                    onOpen={this.onOpenModal.bind(this)}
                    onClose={this.onCloseModal.bind(this)}
                    open={this.state.open}
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
