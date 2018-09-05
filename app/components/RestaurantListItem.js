/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class RestaurantListItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      open: false
		}
  }
<<<<<<< HEAD

  

  onOpenModal = (i) => {
=======
  showMore = (i) => {
>>>>>>> 4db61dda0a3f02dbe0c5b5ca3d66288729af78cc
    this.setState({
      open:true
    })
  }

  onCloseModal = () => {
    this.setState({
      open: false
    })
  }

  renderRestaurant = () => {
    return (
      <div className="restaurantCard" onClick={this.onOpenModal}>
      <h2>{this.props.restaurant.name}</h2>
      <img className="listProductImg" src={this.props.restaurant.img}/>
      </div>
    )
  }
  renderRestaurantDetails = () => {

    const {open} = this.state;
    return (
        <Modal open={open} onClose={this.onCloseModal}>
            <div onClick={this.showMore}>
            <img src={this.props.restaurant.img} />
                <h1>{this.props.restaurant.name}</h1>
                <p>{this.props.restaurant.address}</p>
            </div>
        </Modal>
    )
  }

  render() {
    return this.state.open ? this.renderRestaurantDetails() : this.renderRestaurant()
  }
}

RestaurantListItem.propTypes = {
  restaurant: PropTypes.shape({
<<<<<<< HEAD
    name: PropTypes.string,
    address: PropTypes.string,
    img: PropTypes.string
  })
=======
  img: PropTypes.string,
  name: PropTypes.string,
  adress: PropTypes.string
  })

>>>>>>> 4db61dda0a3f02dbe0c5b5ca3d66288729af78cc
};

export default RestaurantListItem;
