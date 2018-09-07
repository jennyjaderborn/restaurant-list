import React from 'react';

const SavedRestaurants = (props) => {

let visaArray = JSON.parse(localStorage.getItem("sparadarray"));    
console.log('sparade', visaArray);

/*for(let i = 0; i < visaArray.length; i++) { 
    return (<div>{visaArray[i]}</div>);
}*/


const restaurantItems = visaArray.map((item) => {
return (
    <div>
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