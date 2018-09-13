import React from 'React';


const CategoryItem = ( props ) => {
    return(        
        <button onClick={() => props.filterCategories(props.category.category)} className="categoryButton">{props.category.category}</button>
    )
}


export default CategoryItem;