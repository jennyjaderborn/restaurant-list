import React, { Component } from 'react';

class Reviews extends Component {
    constructor(props){
        super(props)
    
        this.renderReviews = this.renderReviews.bind(this)
    }

    renderReviews = (props) => {
        return(
        this.props.reviews.map((review, i) => 
                                <div key={i}>
                                    <p>{review.name} : {review.review} </p>
                                    </div>)
        )
    }
    render(){
     return this.renderReviews()
    
}
}
  export default Reviews;