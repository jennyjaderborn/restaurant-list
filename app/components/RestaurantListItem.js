/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import Save from './Save';



class RestaurantListItem extends React.Component {

  constructor(props){
    super(props)

  this.state = {
    open: false,
  }

  this.saveRestaurant = (props) => {
    alert('spara')
if(localStorage.sparadarray === null){
    let minArray = [];
    localStorage.setItem("sparadarray", JSON.stringify(minArray)); 
    
}
    
    let ParsedArray = JSON.parse(localStorage.getItem("sparadarray"));
    ParsedArray.push(this.props.restaurant);
    localStorage.setItem("sparadarray", JSON.stringify(ParsedArray));
    console.log('arrayen::::',ParsedArray);
    

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
console.log(this.props)
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
                <Save
                    save={this.saveRestaurant}
                />
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
