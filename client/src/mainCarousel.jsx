import React from 'react';
import styled from 'styled-components';
import Item from './item';

const Row = styled.div`
  display: flex;
  overflow: hidden;
  `;
const Prod = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  display: flex;
  justify-content: center;
  font-size: 50px;
  line-height: 48.5px;
`;

const MainCarousel = ({ name, focus }) => (
  <div>
    <Prod>{ name }</Prod>
    <Row>
      { styles.map((style) => <Item url={style.url} /> <Info /> />)}
    </Row>
  </div>
);

export default MainCarousel;
