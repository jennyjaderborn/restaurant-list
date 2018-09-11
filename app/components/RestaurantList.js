/**
 *
 * RestaurantList
 *
 */

import React from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';


class RestaurantList extends React.Component {  
  constructor(props) {
    super(props)
      this.state = {
          open: false,
          selected: -1
      }

      this.onOpenModal = this.onOpenModal.bind(this)
      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.onCloseModal = this.onCloseModal.bind(this)
    }


  onOpenModal = (id) => {
    console.log('this is the selected id', id)
    this.setState({
      open: true,
      selected: id
    })
  }

  onCloseModal = () => {
    this.setState({
      open: false,
      selected: -1
    })
  }


    eachRestaurant = (restaurant) => {
      return (
      <RestaurantListItem 
                      restaurant={restaurant}
                      key={restaurant.id}
                      id={restaurant.id}
                      open={this.state.open}
                      selectedId={this.state.selected}
                      handleClick={this.onOpenModal}
                      handleClose={this.onCloseModal}
      /> )

    }


  render() {
      return (
        <div className="restaurantListWrap">

          {/*Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item in eachRestaurant().*/}
          {this.props.restaurants.map((restaurant) => this.eachRestaurant(restaurant))}
          
        </div>
      )
      
    }
  }


RestaurantList.propTypes = {

  restaurants: PropTypes.array.isRequired
};

export default RestaurantList;
