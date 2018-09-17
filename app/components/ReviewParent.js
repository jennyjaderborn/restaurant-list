import React, { Component } from 'react';

import Reviews from './Reviews'
import ReviewForm from './ReviewForm'


class ReviewParent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayList : false,
            displayForm : false,
            reviews : [
                {
                    name : "Alice",
                    text : "Trevlig personal och god mat!"
                },
                {
                    name : "Stefan",
                    text : "Fin utsikt, bra mat."
                },
                {
                    name : "Anna",
                    text : "Mysigt ställe, bästa personalen."
                }

            ]
        }


        this.displayReviews = this.displayReviews.bind(this)
    }

    displayReviews = () => {
        this.setState({
            displayList : !this.state.displayList
        })
    }

    displayForm = () => {
        this.setState({
            displayForm : !this.state.displayForm
        })
    }

    saveReview = (newName,newText) => {
        console.log('recenssion:' ,newText, newName);  
       
        this.setState(prevState => ({
                reviews: [
                    ...prevState.reviews,
                    {
                        name: newName,
                        text : newText 
                    }
                ]
            }))
    
            this.setState({
              displayForm : !this.state.displayForm,
              displayList: true
            })
        }


    render() {
        return (
            <div>
                {console.log(this.state.displayList)}

                <Reviews 
                            reviews={this.state.reviews}
                            isDisplayed={this.state.displayList}
                            display={this.displayReviews} 
                            />

                <ReviewForm 
                            isDisplayed={this.state.displayForm} 
                            display={this.displayForm} 
                            reviews={this.state.reviews} 
                            saveThis={this.saveReview}
                            />

               
            </div>
        )
    }
}

export default ReviewParent;