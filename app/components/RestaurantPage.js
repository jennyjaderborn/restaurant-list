/**
 *
 * RestaurantPage
 *
 */

import React from "react";
import RestaurantList from './RestaurantList';
import PropTypes from 'prop-types';

let categories = [
  {
    category: 'italienskt',
    id: 0,
  },
  {
    category: 'libanesiskt',
    id: 1
  },
  {
    category: 'spanskt',
    id: 2
  },
  {
    category: 'alla',
    id: 3
  }
]

let restaurants = [

      { 
        name: 'Bellini',
        address: 'Linnegatan 20',
        img: require('images/spizo.jpg'),
        id: 0,
        category: 'italienskt'
      },
      { 
        name: 'Un Poco L',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 1,
        category: 'libanesiskt' 
      },
      { 
        name: 'Spizo L',
        address: 'Vasagatan 4',
        img: require('images/spizo.jpg'),
        id: 2,
        category: 'libanesiskt' 
        
      },
      { 
        name: 'Food Corner',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 3,
        category: 'spanskt'         
      },
      { 
        name: 'Un Poco L',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 4,
        category: 'libanesiskt'
        
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 5,
        category: 'italienskt'        
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 6,
        category: 'italienskt'        
      },
      { 
        name: 'Un Pocosist L',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 7,
        category: 'libanesiskt'        
      }
];



class RestaurantPage extends React.Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    
  }
  
  render() {    
    return (
      <div className="restaurantPage">
        {this.props.cat ? <h2>{this.props.cat}</h2> : <h2>Restauranger</h2>}
        <RestaurantList cat={this.props.cat} categories={categories} restaurants={restaurants}/>
      </div>
    );
    
  }
}

export default RestaurantPage;
