import React from 'react';
import styled from 'styled-components';
import Item from './item';

const Prod = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  display: flex;
  justify-content: center;
  font-size: 50px;
  line-height: 48.5px;
`;

const MainCarousel = ({ name, prev, main, next }) => (
  <div>
    <Prod>{ name }</Prod>
    <Item prev={prev} main={main} next={next} />
  </div>
);

export default MainCarousel;
