import React from 'React';
import Link from 'react-router-dom'


const CategoryItem = (props) => {
    
    return(    
        <button onClick={() => props.filterCategories(props.category.category)} className="categoryButton">{props.category.category}</button>
        
    )

}


export default CategoryItem;