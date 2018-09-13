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
    category: 'italienskt'
  },
  {
    category: 'libanesiskt'
  },
  {
    category: 'spanskt'
  },
  {
    category: 'alla'
  }
]

let restaurants = [

      { 
        name: 'Bellini',
        address: 'Linnegatan 20',
        img: require('images/spizo.jpg'),
        id: 0
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 1,
        category: 'libanesiskt' 
      },
      { 
        name: 'Spizo',
        address: 'Vasagatan 4',
        img: require('images/spizo.jpg'),
        id: 2
      },
      { 
        name: 'Food Corner',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 3
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 4,
        category: 'libanesiskt'
        
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 5
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 6
      },
      { 
        name: 'Un Pocosist',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg'),
        id: 7,
        category: 'libanesiskt'        
      }
];

class RestaurantPage extends React.Component {
   
  render() {

    return (
      <div className="restaurantPage">
        <h2>Restauranger</h2>
        <RestaurantList categories={categories} restaurants={restaurants}/>
      </div>
    );
    
  }
}

export default RestaurantPage;
