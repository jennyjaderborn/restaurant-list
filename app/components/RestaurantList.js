/**
 *
 * RestaurantList
 *
 */

import React from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

class RestaurantList extends React.Component {  
  constructor(props) {
    super(props)
      this.state = {
          selected: -1,
          selectedCat: 'alla'
      }

      this.onOpenModal = this.onOpenModal.bind(this)
      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.onCloseModal = this.onCloseModal.bind(this)
      this.filterCategories = this.filterCategories.bind(this)
    }

    onOpenModal = (id) => {
      console.log('this is the selected id', id)
      this.setState({
        selected: id
      })
    }

    onCloseModal = () => {
      this.setState({
        selected: -1
      })
    }

    filterCategories = (category) => {
      this.setState({
        selectedCat: category
      })
      console.log('this category was choosen', category)
    }

    eachCategory = (category) => {
      return <CategoryItem 
                  category={category}
                  filterCategories={this.filterCategories}
                />
    }


    eachRestaurant = (restaurant) => {
      return (
      <RestaurantListItem 
                      restaurant={restaurant}
                      key={restaurant.id}
                      id={restaurant.id}
                      selectedId={this.state.selected}
                      handleClick={this.onOpenModal}
                      handleClose={this.onCloseModal}
      /> )

    }


      render() {
          return (
            <React.Fragment>
              <div className="categories">
                {this.props.categories.map((category) => this.eachCategory(category))}
              </div>
           
            <div className="restaurantListWrap">
              {console.log('kategorier ', this.props.categories)}
              {this.state.selectedCat === 'alla' ? this.props.restaurants.map((restaurant) => this.eachRestaurant(restaurant)) : null}
              {/*Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item in eachRestaurant().*/}
              {this.props.restaurants.filter(restaurant => restaurant.category === this.state.selectedCat).map((restaurant) => this.eachRestaurant(restaurant))}
              
            </div>
            </React.Fragment>
          )
          
        }
  }


  RestaurantList.propTypes = {

    restaurants: PropTypes.array.isRequired
  };

export default RestaurantList;
