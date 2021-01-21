import React from 'react';
import styled from 'styled-components';

const ProdS = styled.span`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
  transform: translateX(-50%);
`;

const CImg = styled.img`
  width: 950px;
  height: 950px;
  transition: 1s all ease;
  transform: translateX(-50%);
`;

const Item = ({ product, index }) => {
  const { url } = product;
  let { styleName } = product;
  if (index !== 1) {
    styleName = '';
  }
  return (
    <div>
      <CImg src={url} alt="Product" />
      <ProdS>{ styleName }</ProdS>
    </div>
  );
};

export default Item;
