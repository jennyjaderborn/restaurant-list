/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import SaveRestaurant from './SaveRestaurant'




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
    }
  
    this.renderRestaurantDetails = this.renderRestaurantDetails.bind(this)
    this.renderRestaurant = this.renderRestaurant.bind(this)
    //this.saveRestaurant = this.saveRestaurant.bind(this)
    this.saveReview = this.saveReview.bind(this)
    this.renderReviewForm = this.renderReviewForm.bind(this)
    this.showReviews = this.showReviews.bind(this)
  

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
          showForm : !this.state.showForm,
          showComponent: true
        })
    }

    renderReviewForm = (props) => {
      this.setState({
        showForm : !this.state.showForm
      })
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
                        <SaveRestaurant restaurantToSave={this.props.restaurant} />
                      </div>

                  </div>

                  <button onClick={this.showReviews}>Visa recenssioner</button>
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
