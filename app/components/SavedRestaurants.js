import React from 'react';

const SavedRestaurants = (props) => {

let visaArray = JSON.parse(localStorage.getItem("sparadarray"));    
console.log('sparade', visaArray);


const restaurantItems = visaArray.map((item,i) => {
return (
    <div key={i}>
<p>{item.name}</p>
<img src={item.img}/>
</div>
);
    })
return(
    <div>{restaurantItems}</div>
)

}

export default SavedRestaurants;