/**
 *
 * RestaurantListItem
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class RestaurantListItem extends React.Component {
  constructor() {
    super()
  this.state = {
    showDetails: false,
    button: "Visa mer"
  }
}
 
  showMore = (i) => { 
   this.setState({
      showDetails: !this.state.showDetails,
      button: "Visa mindre"
    })
  }

  showLess = (i) => { 
    this.setState({
       showDetails: !this.state.showDetails,
       button: "Visa mer"
     })
   }



  renderRestaurant = () => {
    return (
      <div>
        <div onClick={this.showMore}>
            <h2>{this.props.restaurant.name}</h2>
            {this.state.button}
        </div>
    </div>
    )
  }

  renderRestaurantDetails = () => {
    return (
      <div>
        <div onClick={this.showLess}>
            <h1>Detaljer</h1>
            <p>{this.props.restaurant.name}</p>
          {this.state.button}
      </div>
      </div>
    )
  }
    

  render() {
    return this.state.showDetails ? this.renderRestaurantDetails() : this.renderRestaurant();
  }
}


RestaurantListItem.propTypes = {
  
};

export default RestaurantListItem;
