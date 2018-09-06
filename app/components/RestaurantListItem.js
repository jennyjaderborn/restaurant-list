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
          <img className="listImage" src={img}/>
          
      </div>
    )
  }


  renderRestaurantDetails = () => {

    const { img, name, address } = this.props.restaurant;
    const { open } = this.state;
    return (
      <React.Fragment>
        <div className="restaurantCard" onClick={this.onOpenModal}>
          <h2>{name}</h2>
          <img className="listImage" src={img}/>
        </div>

        <Modal open={open} onClose={this.onCloseModal}>
                <img className="modalImage" src={img} />
                <h1>{name}</h1>
                <p>{address}</p>
        </Modal>
        </React.Fragment>
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
    img: PropTypes.string,
  }),
};

export default RestaurantListItem;
