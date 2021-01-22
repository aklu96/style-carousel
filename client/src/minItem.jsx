import React from 'react';
import styled from 'styled-components';

const MinImg = styled.img`
  border-radius: 20%;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const ProdS = styled.span`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
`;

const MinItem = ({ style }) => {
  const { url, styleName, price } = style;
  return (
  <div>
    <ProdS>{ styleName }</ProdS>
    <ProdS>${ price }</ProdS>
    <MinImg src={url} />
  </div>
  );
};

export default MinItem;
