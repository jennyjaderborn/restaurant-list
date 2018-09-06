import React from 'react';

class SaveRestaurant extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        saved: false,
        savedArray: []
    }

    this.save = (e) => {
        this.setState( state =>({
            saved: !state.saved
        }))
    }
}

    componentWillMount() {
        localStorage.getItem('save') && this.setState({
            saved: JSON.parse(localStorage.getItem('save')),
            isLoading: false
        })
    }


   /* componentDidMount() {
        this.fetchData();
    }*/

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('save', JSON.stringify(nextState.saved));
    }

    render(){
        return (
            <button value={null} onClick={(e) => this.save(e)}>
                 {this.state.saved ? 'saved' : 'not saved'}
            </button>
        
        )

          
    }


}
export default SaveRestaurant;