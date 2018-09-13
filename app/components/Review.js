import React, { Component } from 'react';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';



let reviews = [
    
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
    ];

class Review extends Component {

    
    constructor(props){
    super(props)

    this.state = {
            showComponent : false
        }
    }

    showReviews = (props) => {
        this.setState({
            showComponent : !this.state.showComponent
        }, () => {
            //console.log(this.state.showComponent, 'konsolar state i showreviews');
        })
    }

    render(){
        return (
        <div>
            <button onClick={this.showReviews}>More reviews</button>
            <Reviews reviews={reviews} show={this.state.showComponent} />
            <ReviewForm />
            </div>
        )
    }
}

  export default Review;