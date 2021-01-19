import React from 'react';

const Item = (props) => (
  <div>
    <h3>
      { props.style.name }
    </h3>
    <img src={ props.style.url }></img>
  </div>
);

export default Item;
