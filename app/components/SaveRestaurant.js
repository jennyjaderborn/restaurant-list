import React, {Component} from 'react';

class SaveRestaurant extends Component {


    save = () => {
        console.log('Resturang att spara', this.props.restaurantToSave)
        alert('SPARAD')

        
      if(!localStorage.savedArray){
        let restaurantArray = [];
        localStorage.setItem("savedArray", JSON.stringify(restaurantArray)); 
        
      }
  
      let ParsedArray = JSON.parse(localStorage.getItem("savedArray"));
        ParsedArray.push(this.props.restaurantToSave);
        localStorage.setItem("savedArray", JSON.stringify(ParsedArray));
        console.log('sparad array: ',ParsedArray);
    
    
    }


    render() {
        return (
            <div>
                 <button onClick={this.save}>SPARA HÄR</button>
            </div>
           
        )
    }
}

export default SaveRestaurant;