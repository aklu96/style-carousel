import React from 'react';
import styled from 'styled-components';

const ProdS = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
  transform: translateX(-50%);
  &:nth-child(3) {
    display: none;
  }
`;

const CImg = styled.img`
  width: 950px;
  height: 950px;
  transition: 1s all ease;
  transform: translateX(-50%);
`;

const Row = styled.div`
  display: flex;
  overflow: hidden;
`;

const Item = ({ prev, main, next }) => {
  const prevUrl = prev.url;
  const mainUrl = main.url;
  const nextUrl = next.url;

  return (
    <Row>
      <CImg src={prevUrl} alt="Product" />
      <CImg src={mainUrl} alt="Product" />
      <CImg src={nextUrl} alt="Product" />
    </Row>
  );
};

export default Item;
