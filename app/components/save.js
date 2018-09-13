import React from 'react';

const Save = (props) => {
    return (
    <button value={null} onClick={props.save}><div className="heart"><i class="fa fa-heart"><p>Spara</p></i></div></button>
    )
}
  export default Save;