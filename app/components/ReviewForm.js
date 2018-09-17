import React, { Component } from 'react'

class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.save = this.save.bind(this)
        
    }


    save = (e) => {
        e.preventDefault()
            console.log('recenssion:' , this._newText.value);  
		this.props.saveThis(this._newText.value)
    }


    render(){
    return(


    <div>
        <button onClick={this.props.display}>Skriv recenssion</button>

        {this.props.isDisplayed ? (
        <form onSubmit={this.save}>
            <textarea 
                    ref={(input) => this._newText = input}/>
            <button id="save">Spara</button>
            </form> ) : null
        }
    </div>
    )
}
}

export default ReviewForm;
