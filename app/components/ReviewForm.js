import React, { Component } from 'react'

class ReviewForm extends Component {
constructor(props){
    super(props)
}

    save = (e) => {
        e.preventDefault()
		this.props.save(this._newText.value)
    }
    render(){
    return(
    <div>
    <form onSubmit={this.save}>
        <textarea 
        ref={(input) => this._newText = input}/>
        <button id="save">Spara</button>
    </form>
    </div>
    )
}
}

export default ReviewForm;
