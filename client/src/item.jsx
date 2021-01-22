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
  width: 800px;
  height: 800px;
`;

const Item = ({ style, i }) => {
  const { url } = style;
  let { styleName } = style;
  if (i !== 1) {
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
