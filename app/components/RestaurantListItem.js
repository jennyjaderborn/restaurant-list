/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

class RestaurantListItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      open: false
		}
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

  renderRestaurant = () => {
    const { name, img } = this.props.restaurant;

    return (
      <div className="restaurantCard" onClick={this.onOpenModal}>
          <h2>{name}</h2>
          <img className="listProductImg" src={img}/>
      </div>
    )
  }
  renderRestaurantDetails = () => {

    const {open} = this.state;
    const { img, name, address } = this.props.restaurant;

    return (
        <Modal open={open} onClose={this.onCloseModal}>
            <div onClick={this.showMore}>
                <img src={img} />
                <h1>{name}</h1>
                <p>{address}</p>
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
    name: PropTypes.string,
    address: PropTypes.string,
    img: PropTypes.string
  })
};

export default RestaurantListItem;
