/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import Save from './Save';

const minArray = [];

class RestaurantListItem extends React.Component {

  constructor(props){
    super(props)

  this.state = {
    open: false,
    saved: false,
  }

  this.saveRestaurant = (props) => {
    alert('spara')
    //console.log('PROPS:', this.props.restaurant)
    this.setState( state => ({
      saved: !state.saved,
    }))
    minArray.push(this.props.restaurant);
    console.log('arrayen::::',minArray);
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



componentWillMount(minArray) {
  localStorage.getItem("sparadarray");
//alert(localStorage.getItem("sparadarray"));
  /*localStorage.getItem('save') && this.setState({
    saved: JSON.parse(localStorage.getItem('save')),
    isLoading: false
  })*/
}

componentWillUpdate(minArray) {
  localStorage.setItem("sparadarray", minArray);
  //localStorage.setItem('save', JSON.stringify(nextState.saved))
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
