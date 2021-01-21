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

const Row = styled.div`
  display: flex;
  overflow: hidden;
`;

const MainCarousel = ({ name, focus }) => (
  <div>
    <Prod>{ name }</Prod>
    <Row>
      {focus.map((product) => <Item product={product} />)}
    </Row>
  </div>
);

export default MainCarousel;
