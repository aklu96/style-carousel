import React from 'react';
import styled from 'styled-components';

const ProdS = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  display: flex;
  justify-content: center;
  font-size: 25px;
  line-height: 35px
`;

const CImg = styled.img`
  width: 950px;
  height: 950px;
`;

const Item = ({ style }) => {
  const { styleName } = style;
  const { url } = style;
  return (
    <div>
      <CImg src={url} alt="Product" />
      <ProdS>
        { styleName }
      </ProdS>
    </div>
  );
};

export default Item;
