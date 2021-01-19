import React from 'react';
import Item from './item';

const MainCarousel = (props) => (
  <div>
    <h1>{ props.name }</h1>
    {props.styles.map((style) => <Item style={style} />)}
  </div>
);

export default MainCarousel;
