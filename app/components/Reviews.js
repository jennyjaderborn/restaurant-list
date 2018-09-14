import React from 'react';


    const Reviews = (props) => {
        return(
        props.reviews.map((review, i) => 
                                <div key={i}>
                                    <p>{review.name} : {review.review} </p>
                                    </div>)
        )
    
}
  export default Reviews;