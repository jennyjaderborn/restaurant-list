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
      if(!localStorage.savedArray){
        let restaurantArray = [];
        localStorage.setItem("savedArray", JSON.stringify(restaurantArray)); 
        
      }
  
      let ParsedArray = JSON.parse(localStorage.getItem("savedArray"));
        ParsedArray.push(this.props.restaurant);
        localStorage.setItem("savedArray", JSON.stringify(ParsedArray));
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


      renderRestaurantDetails = () => {
       // console.log('ID') // onOpenModal() pass the id through props as selectedId.

        //if(id === this.props.restaurant.id){

          console.log('matching restaurant: ', this.props.restaurant)
        
            const { img, name, address } = this.props.restaurant;
    
          return (
             <React.Fragment>
                <div className="restaurantCard">
                  <h2>{name}</h2>
                  <img className="listImage" src={img}/>
                </div>

                <Modal open={true} onClose={this.props.handleClose}>
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

      render(id) {
        return this.props.selectedId === this.props.restaurant.id ? this.renderRestaurantDetails() : this.renderRestaurant()
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
