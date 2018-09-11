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

    this.renderRestaurantDetails = this.renderRestaurantDetails.bind(this)
    this.renderRestaurant = this.renderRestaurant.bind(this)
    this.saveRestaurant = this.saveRestaurant.bind(this)

    }

    /* saves restaurant in localstorage with an array*/
    saveRestaurant = (props) => {
      if(!localStorage.sparadarray){
        let minArray = [];
        localStorage.setItem("sparadarray", JSON.stringify(minArray)); 
        
      }
  
      let ParsedArray = JSON.parse(localStorage.getItem("sparadarray"));
        ParsedArray.push(this.props.restaurant);
        localStorage.setItem("sparadarray", JSON.stringify(ParsedArray));
        console.log('sparad array: ',ParsedArray);
    }
    

    renderRestaurant = (props) => {
        const { name, img } = this.props.restaurant;    
        const { id } = this.props;

        return (
          <div className="restaurantCard" onClick={() => this.props.handleClick(id)}>
              <h2>{name}</h2>
              <img className="listImage" src={img}/>
              
          </div>
        )
      }


      renderRestaurantDetails = (id) => {
        console.log('ID', id) // onOpenModal() pass the id through props as selectedId.

        if(id === this.props.restaurant.id){

          console.log('matching restaurant: ', this.props.restaurant)
        
            const { img, name, address } = this.props.restaurant;
            const { open } = this.props;
    
          return (
              <React.Fragment>
                <div className="restaurantCard">
                  <h2>{name}</h2>
                  <img className="listImage" src={img}/>
                </div>

                <Modal open={open} onClose={this.props.handleClose}>
                        <img className="modalImage" src={img} />
                        <h1>{name}</h1>
                        <p>{address}</p>
                          <Save
                              save={this.saveRestaurant}
                          />
                </Modal>
              </React.Fragment>
        )
      } else {
        return null;
        }
      }

      render(id) {
        return this.props.open ? this.renderRestaurantDetails(this.props.selectedId) : this.renderRestaurant()
      }
    }
    

    RestaurantListItem.propTypes = {
      restaurant: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        img: PropTypes.string,
        id: PropTypes.number
      }),
};

export default RestaurantListItem;
