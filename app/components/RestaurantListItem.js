/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

class RestaurantListItem extends React.Component {
 

  renderRestaurant = (props) => {
    const { name, img } = this.props.restaurant;
    
    const { onOpen } = this.props;
    

    return (
      <div className="restaurantCard" onClick={onOpen}>
          <h2>{name}</h2>
          <img className="listImage" src={img}/>
      </div>
    )
  }


  renderRestaurantDetails = (props) => {

    const { img, name, address } = this.props.restaurant;
    const { open, onClose, onOpen } = this.props;
    return (
      <React.Fragment>
<<<<<<< HEAD
        <div className="restaurantCard" onClick={this.onOpenModal}>
          <h4 className="restaurantName">{name}</h4>
          <img className="listProductImg" src={img}/>
        </div>

        <Modal open={open} onClose={this.onCloseModal}>
                <img className="modalImg" src={img} />
                <h3 className="restaurantName">{name}</h3>
=======
        <div className="restaurantCard" onClick={onOpen}>
          <h2>{name}</h2>
          <img className="listImage" src={img}/>
        </div>

        <Modal open={open} onClose={onClose}>
                <img className="modalImage" src={img} />
                <h1>{name}</h1>
>>>>>>> e35d772d81f61ed6397cc35a20832d54a9397772
                <p>{address}</p>
        </Modal>
        </React.Fragment>
    )
  }

  render() {
    return this.props.open ? this.renderRestaurantDetails() : this.renderRestaurant()
  }
}

RestaurantListItem.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    img: PropTypes.string
  }),
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,  
  open: PropTypes.bool.isRequired
};

export default RestaurantListItem;
