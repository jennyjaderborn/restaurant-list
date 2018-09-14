/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import Save from './Save';
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'




class RestaurantListItem extends React.Component {

  constructor(props){
    super(props) 

    this.state = {
      showForm : false,

      reviews : [
        
              { 
                name: 'Adam',
                review: 'God mat och trevlig personal!',
              },
              { 
                name: 'Hannah',
                review: 'Bra italiensk mat. Fin utsikt.',
              },
              { 
                name: 'John',
                review: 'Helt ok.'
              }
        ],

      savedValue: -1
    }
  
    this.renderRestaurantDetails = this.renderRestaurantDetails.bind(this)
    this.renderRestaurant = this.renderRestaurant.bind(this)
    this.saveRestaurant = this.saveRestaurant.bind(this)
    this.saveReview = this.saveReview.bind(this)
    this.renderReviewForm = this.renderReviewForm.bind(this)
  

    }

    showReviews = (props) => {
      this.setState({
          showComponent : !this.state.showComponent,
      })
  }

    saveReview = (newText) => {
    console.log('recenssion:' ,newText);  
   
    this.setState(prevState => ({
			reviews: [
				...prevState.reviews,
				{
                    name: 'jenny',
                    review : newText 
				}
			]
        }))

        this.setState({
          showForm : !this.state.showForm
        })
    }

    renderReviewForm = (props) => {
      this.setState({
        showForm : !this.state.showForm
      })
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
              
              <img className="listImage" src={img}/>
              <h3>{name}</h3>
              
          </div>
        )
      }


      renderRestaurantDetails = () => {
     

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
                        <div className="infoWrapper">
                          <div className="boxOne">
                        <h2>{name}</h2>
                        <p>{address}</p>
                        </div>
                        <div className="boxTwo">
                          <Save
                              save={this.saveRestaurant}
                          /> 
                          </div>   
                          </div>
                          <button onClick={this.showReviews}>More reviews</button>
                          <button onClick={this.renderReviewForm}>Skriv recenssion</button>
                          {this.state.showComponent ? <Reviews reviews={this.state.reviews}/> : null}
                        {this.state.showForm ? <ReviewForm save={this.saveReview}/> : null}     
                                         
                          
                </Modal>
              </React.Fragment>

            
        )  

      }

      render() {
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
