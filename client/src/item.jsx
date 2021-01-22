import React from 'react';
import styled from 'styled-components';

const ProdS = styled.span`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
`;

const CImg = styled.img`
  width: 800px;
  height: 800px;
`;

const Item = ({ style }) => {
  const { url } = style;
  let { styleName, price } = style;
  return (
    <div>
      <ProdS>{ styleName }</ProdS>
      <ProdS>${ price }</ProdS>
      <CImg src={url} alt="Product" />
    </div>
  );
};

export default Item;
