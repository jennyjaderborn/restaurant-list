/**
 *
 * RestaurantPage
 *
 */

import React from "react";
import RestaurantList from './RestaurantList';
import PropTypes from 'prop-types';


let restaurants = [

      { 
        name: 'Bellini',
        address: 'Linnegatan 20',
        img: require('images/images.jpg')
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      },
      { 
        name: 'Un Poco',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      },
      { 
        name: 'Un Pocosist',
        address: 'Vasagatan 4',
        img: require('images/unpoco.jpg')
      }
];

class RestaurantPage extends React.Component {
   
  render() {

    return (
      <div className="restaurantPage">
        <h2>Restauranger</h2>
        <RestaurantList restaurants={restaurants}/>
      </div>
    );
    
  }
}

export default RestaurantPage;
