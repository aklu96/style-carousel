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
  &:first-child {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Item = ({ style, childNum }) => {
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
