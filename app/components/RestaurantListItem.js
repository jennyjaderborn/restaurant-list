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
  constructor(props){
    super(props)

    this.state = {
      showDetails: false,
      button : 'show more'
		}
  }

  showMore = (i) => {
    this.setState({
      showDetails : !this.state.showDetails,
    })
  }

  renderRestaurant = () => {
    return (
      <li onClick={this.showMore}>{this.props.restaurant.name}
      </li>
    )
  }

  renderRestaurantDetails = () => {
    return (
      <div>
        <li onClick={this.showMore}>{this.props.restaurant.name}
      </li>
      <h1>details</h1>
      <p>{this.props.restaurant.name}</p>
      <p>{this.props.restaurant.address}</p>
      </div>
    )
  }
  render() {
    return this.state.showDetails ? this.renderRestaurantDetails() : this.renderRestaurant()
  }
}

RestaurantListItem.propTypes = {};

export default RestaurantListItem;
