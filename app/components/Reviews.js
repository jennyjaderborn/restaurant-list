import React from 'react';


    const Reviews = (props) => {
        {console.log('nu i reviews här är id', props.id)}
        
        return(
        <React.Fragment>
            <button onClick={props.display}>Se recenssioner</button>
            {console.log('nu i reviews här är id', props.id)}
            {props.isDisplayed ? (
                props.reviews.map((review, i) => 
                                <div key={i}>
                                    <p>{review.name} : {review.text} </p>
                                </div>)
            ) : null }

                    </React.Fragment>
        )

    
}
  export default Reviews;